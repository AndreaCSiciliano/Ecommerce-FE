import { Product } from "./product";

export class CheckoutProduct extends Product{

  constructor(id: number, name: string, description: string, image: string, price: number, public quantity: number) {
    super(id, name, description, image, price);
  }

  value(): number {
    return this.price * this.quantity;
  }
};
