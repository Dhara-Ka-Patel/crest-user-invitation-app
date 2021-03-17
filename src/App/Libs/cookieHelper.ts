import { uniqueIDGenerator } from './Helpers';

export const setToLocalStorage = (user: any) => {
  const token = uniqueIDGenerator();
  localStorage.setItem('authToken', token);

  localStorage.setItem('user', JSON.stringify(user));
};

export const removeFromLocalstorage = () => {
  localStorage.removeItem('authToken');

  localStorage.removeItem('user');
};


export const getUserFromLocalStorage = () => {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  };