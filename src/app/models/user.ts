import { UserDto } from "./authentication-user";
import { PaymentMethod } from "./payment-method";
import { Role } from "./role";

export interface User extends UserDto{
  id?: number,
  name: string,
  address: string,
  number: string,
  complement?: string,
  mainPaymentMethod: PaymentMethod,
  role?: Role;
}
