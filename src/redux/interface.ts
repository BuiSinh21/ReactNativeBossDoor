import {  UserAccount, } from "../interfaces/auth";

export interface AuthState {
  access_token?: string;
  refresh_token?: string;
  user: UserAccount;
  role: {
    role_id: number;
    role_name: string;
  };
  fcmToken?: string;
}

export interface InfoState {
  activeWifi: number;
  activeLocation: number;
  activeInternal: number;
}
export interface CommonState {
  openLoading: boolean;
  openSuccess: boolean;
  titleSuccess?: string;
  openToast: boolean;
  titleToast?: string;
  fontSize: string;
  openWarningTimekeeping: boolean;
  openNoti: boolean;
  notiTitle?: string;
}
