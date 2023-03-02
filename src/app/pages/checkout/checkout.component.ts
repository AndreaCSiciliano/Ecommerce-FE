import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/order-status';
import { PaymentMethod } from 'src/app/models/payment-method';
import { ShippingMethod } from 'src/app/models/shipping-method';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ObservableService } from 'src/app/services/observable.service';
import { OrderService } from 'src/app/services/order.service';
import { emailPattern } from 'src/app/utils/pattern';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private user!: User;
  checkoutForm!: FormGroup;
  paymentMethods = [
    PaymentMethod.BANK_DEPOSIT,
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.PAYPAL
  ];
  shippingMethod = [
    ShippingMethod.CHEAPEST,
    ShippingMethod.FASTEST
  ];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private observableService: ObservableService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(emailPattern)]
      }),
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      address: new FormControl('', {
        validators: [Validators.required]
      }),
      number: new FormControl('', {
        validators: [Validators.required]
      }),
      paymentMethod: new FormControl('', {
        validators: [Validators.required]
      }),
      shippingMethod: new FormControl('', {
        validators: [Validators.required]
      })
    });
    this.autoFillForm();
  }

  private autoFillForm() {
    this.loginService.getUserByToken().subscribe(result => {
      this.user = result.data;
      this.checkoutForm.controls['email'].setValue(result.data.email);
      this.checkoutForm.controls['name'].setValue(result.data.name);
      this.checkoutForm.controls['address'].setValue(result.data.address);
      this.checkoutForm.controls['number'].setValue(result.data.number);
      this.checkoutForm.controls['paymentMethod'].setValue(result.data.mainPaymentMethod);
    });
  }

  public submit() {
    const order: Order = {
      userId: this.user.id!,
      paymentMethod: this.checkoutForm.get('paymentMethod')?.value,
      shippingMethod: this.checkoutForm.get('shippingMethod')?.value,
      productsInOrder: this.orderService.getProductsToCheckout(),
      status: OrderStatus.PROCESSING
    }
    this.orderService.createOrder(order).subscribe(() => {
      this.observableService.cleanCart();
      this.router.navigate(['/thanks']);
    });
  }
}
