import {  SummaryDto, UserAccount, UserAccountInfor, } from "../interfaces/auth";

export interface AuthState {
  access_token?: string;
  refresh_token?: string;
  user: UserAccount;
  userDisplay: UserAccountInfor;
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

export interface SummaryState {
  lich_su_don_hang:{};
  thong_ke_doanh_thu:SummaryDto,
}