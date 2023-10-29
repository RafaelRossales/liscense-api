export interface ICustomer {
  id: number;
  name: string;
  cnpj: string;
  username: string;
  password: string;
  key: string;
  small_logo: string;
  large_logo: string;
  acquire: Date;
  expires_at: Date;
  created_at: Date;
  updated_at: Date;
}
