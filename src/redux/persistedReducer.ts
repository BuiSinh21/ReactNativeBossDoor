import { persistReducer } from 'redux-persist';
import mmkvStorage from './mmkv-store';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import commonReducer from './slices/commonSlice';

const persistConfig = {
  key: 'root',
  storage: mmkvStorage,
  whitelist: [''],
  blacklist: [''],
};
const commonPersistConfig = {
  key: 'common',
  storage: mmkvStorage,
  blacklist: [
    'openSuccess',
    'openLoading',
    'openToast',
    'openWarningTimekeeping',
    'openConfigWifi',
  ],
};
const authPersistConfig = {
  key: 'auth',
  storage: mmkvStorage,
};
const notificationPersistConfig = {
  key: 'notification',
  storage: mmkvStorage,
};
const timekeepingPersistConfig = {
  key: 'timekeeping',
  storage: mmkvStorage,
};

export const rootReducer = combineReducers({
  common: persistReducer(commonPersistConfig, commonReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  // notification: persistReducer(notificationPersistConfig, notificationReducer),
  // timekeeping: persistReducer(timekeepingPersistConfig, timekeepingReducer),
  // collaborator: collaboratorReducer,
  // takeOff: takeOffReducer,
  // request: requestReducer,
  // configWifi: configWifiReducer,
  // info: infoReducer,
  // timer: timerReducer,
  // register: registerReducer,
  // sendWifi: sendWifiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
