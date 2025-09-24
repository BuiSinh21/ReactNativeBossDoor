import qs from 'qs';
import axiosBase from '../utils/axiosBase';

export const loginAPI = (params: { username: string; password: string }) => {
  return axiosBase.post('/technician/login', params);
};

export const getErrorAuth = () => {
  return axiosBase.get('/status-401');
};
export const logoutAPI = (params: { refresh_token: string }) => {
  return axiosBase.post('/technician/logout', params);
};