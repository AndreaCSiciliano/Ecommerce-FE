import { AuthenticationUser } from "./authentication-user";
import { PaymentMethod } from "./payment-method";
import { Role } from "./role";

export interface User extends AuthenticationUser{
  id?: number,
  name: string,
  address: string,
  number: string,
  complement?: string,
  mainPaymentMethod: PaymentMethod,
  role?: Role;
}
