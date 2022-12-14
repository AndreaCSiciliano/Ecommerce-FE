import { Pipe, PipeTransform } from '@angular/core';
import { PaymentMethod } from '../models/payment-method';

@Pipe({
  name: 'paymentMethod'
})
export class PaymentMethodPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case PaymentMethod.CREDIT_CARD:
        return 'Credit Card';
      case PaymentMethod.PAYPAL:
        return 'Paypal';
      case PaymentMethod.BANK_DEPOSIT:
        return 'Bank Deposit';
      default: return 'Not found';
    };
  }

}
