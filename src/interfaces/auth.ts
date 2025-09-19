
export interface UserParams {
  id: number;
  name: string;
  email?: string;
  username: string;
  phone: string;
}

export interface EmployeeParams {
  id: number;
  user_id: number;
  full_name: string;
  phone_number: string;
}
