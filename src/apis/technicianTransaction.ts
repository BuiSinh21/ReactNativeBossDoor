import axiosBase from '../utils/axiosBase';

export const getUserProfile = () => {
  return axiosBase.get('/list_all_technicians');
};

export const updateTechnician = (params: {
  id: number,
  full_name?: string;
  phone?: string;
  cccd?: string;
  address?: string;
  avatar?: string;
}, user_id: number) => {
  return axiosBase.put(`/technician`);
};


export const showTechniciant = (user_id: number) => {
  return axiosBase.get(`/technician/${user_id}`,);
};
export const resetPassword = (user_id: number) => {
  return axiosBase.get(`/technician/${user_id}`,);
};


