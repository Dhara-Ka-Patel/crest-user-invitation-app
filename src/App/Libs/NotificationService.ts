import { INotificationMessageParams } from '@ifaces/INotificationMessageParams';
import { INotificationService } from '@ifaces/INotificationService';
import Flex from "@libs/Flex";
import Box from "@libs/Box";
import { toast, Zoom, Slide } from 'react-toastify';
import * as FeatherIcon from 'react-feather';

export class NotificationService implements INotificationService {
  public static showSample(msg = 'Sample notificaiton') {
    const noti = new NotificationService();
    noti.successMessage({ msg });
    noti.infoMessage({ msg });
    noti.warningMessage({ msg });
    noti.errorMessage({ msg });
  }

  public infoMessage({
    msg,
    delay = 100,
    onclose = null,
  }: INotificationMessageParams) {
    toast.info(msg, {
      delay,
      position: toast.POSITION.TOP_RIGHT,
      onClose: onclose,
      transition: Slide,
      hideProgressBar: true,
      className: 'small-notification-container',
      autoClose: 5000,
    });
  }

  public warningMessage({
    msg,
    delay = 100,
    onclose = null,
  }: INotificationMessageParams) {
    toast.warn(msg, {
      delay,
      position: toast.POSITION.TOP_RIGHT,
      onClose: onclose,
      transition: Slide,
      hideProgressBar: true,
      className: 'small-notification-container',
      autoClose: 5000,
    });
  }

  public errorMessage({
    msg,
    delay = 100,
    onclose = null,
  }: INotificationMessageParams) {
    toast.error(msg, {
      delay,
      position: toast.POSITION.TOP_RIGHT,
      onClose: onclose,
      transition: Slide,
      hideProgressBar: true,
      className: 'small-notification-container',
      autoClose: 5000,
    });
  }

  public successMessage({
    msg,
    delay = 100,
    onclose = null,
  }: INotificationMessageParams) {
    toast.success(msg, {
      delay,
      position: toast.POSITION.TOP_RIGHT,
      onClose: onclose,
      transition: Slide,
      hideProgressBar: true,
      className: 'small-notification-container',
      autoClose: 5000,
    });
  }
}
