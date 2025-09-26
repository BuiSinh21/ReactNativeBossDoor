import axiosBase from '../utils/axiosBase';

export const getAllTechnician = () => {
  return axiosBase.get('/technician/list_all');
};

// export const updateTechnician = (param: any) => {
//   return axiosBase.put(`/technician`, param);
// };

export const updateTechnician = (params: {
  id: number,
  full_name?: string;
  phone?: string;
  cccd?: string;
  address?: string;
}) => {
  return axiosBase.put(`/technician`, params);
};
export const updateTechnicianSupports = (params: {
  id?: null,
  customers_id: number,
  error_description?: string;
  image?: string | null;
}) => {
  console.log(12121221, params);

  return axiosBase.post(`/supports`, params);
};
export const showTechniciant = (user_id: number) => {
  return axiosBase.get(`/technician/${user_id}`,);
};
export const changePassword = (params: {
  current_password: string,
  password?: string;
}, user_id: number) => {
  return axiosBase.post(`/technician/${user_id}/change-password`, params);
};


