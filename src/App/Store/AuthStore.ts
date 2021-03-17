import { action, computed, observable, toJS } from 'mobx';
import { RootStore } from './RootStore';
import { ILoggerService } from '@ifaces/ILoggerService';
import { get } from 'lodash';
import { usersList } from '@configs/users';
import { invitationsList } from '@configs/invitations';
import { updatedInvitationsList } from '@configs/invitations_update';
import {
  getUserFromLocalStorage,
  removeFromLocalstorage,
  setToLocalStorage,
} from '@libs/cookieHelper';

const RELOADTIME = 1; // in minutes

export class AuthStore {
  @observable
  private isAuthenticated: boolean = true;

  @observable
  private _me: any = null;

  @observable
  private _notifications: any[] = [];

  private rootStore: RootStore;
  private logger: ILoggerService;

  constructor(rootStore: RootStore, logger: ILoggerService) {
    this.rootStore = rootStore;
    this.logger = logger;

    const user = getUserFromLocalStorage();
    if (user && user !== '') {
      this._me = user;
      this.isAuthenticated = true;

      this.loadData(user.user_id);
    } else {
      this._me = null;
      this.isAuthenticated = false;
    }
  }

  @computed
  public get me() {
    return toJS(this._me);
  }

  @computed
  public get notifications() {
    return toJS(this._notifications);
  }

  @action
  public async isLoggedin() {
    try {
      return this.isAuthenticated;
    } catch (err) {
      this.logger.error('AuthStore.isLoggedin() ', err);
      return false;
    }
  }

  @action
  public async login(email: string, password: string) {
    try {
      console.log('login:', email, password);
      // check email - password
      const data = usersList.filter(
        (dt: any) => dt.email === email && dt.password === password
      );

      if (data && data[0]) {
        this._me = data[0];

        this.isAuthenticated = true;
        setToLocalStorage(data[0]);
        this.loadData(data[0].user_id);
      } else {
        this.isAuthenticated = false;
        this._notifications = [];
        throw 'Invalid credentials';
      }
    } catch (err) {
      this.logger.error('AuthStore.login() ', err);
      throw err;
    }
  }

  public async loadData(user_id: any) {
    try {
      console.log('inviteList:', invitationsList);
      this._notifications = invitationsList.filter(
        (invite: any) => invite.user_id == user_id
      );

      setTimeout(() => {
        console.log('Reloading data:');

        this._notifications = updatedInvitationsList.filter(
          (invite: any) => invite.user_id == user_id
        );
      }, RELOADTIME * 60 * 1000);
    } catch (err) {
      this._notifications = [];
      this.logger.error('AuthStore.loadData()', err);
    }
  }

  @action
  public async logout() {
    try {
      this.isAuthenticated = false;
      removeFromLocalstorage();
    } catch (err) {
      this.logger.error('AuthStore.logout()', err);
    }
  }

  @action
  public async getUser() {
    try {
      return this._me;
    } catch (err) {
      this.logger.error('AuthStore.getUser() ', err);
      return false;
    }
  }
}
