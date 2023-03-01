import { OrderStatus } from "./order-status";
import { PaymentMethod } from "./payment-method"
import { ProductQuantity } from "./product-quantity";
import { ShippingMethod } from "./shipping-method"

export class Order {
  public id?: number;
  public userId!: number;
  public paymentMethod!: PaymentMethod;
  public shippingMethod!: ShippingMethod;
  public productsInOrder!: ProductQuantity[];
  public status!: OrderStatus;
  public creationDate?: Date;
  public totalAmount?: number;
}
