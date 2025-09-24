import axiosBase from '../utils/axiosBase';

export const getUserProfile = () => {
  return axiosBase.get('/list_all_technicians');
};

export const updateTechnician = (param: any) => {
  return axiosBase.put(`/technician`, param);
};


export const showTechniciant = (user_id: number) => {
  return axiosBase.get(`/technician/${user_id}`,);
};
export const resetPassword = (user_id: number) => {
  return axiosBase.get(`/technician/${user_id}/reset-password`,);
};


