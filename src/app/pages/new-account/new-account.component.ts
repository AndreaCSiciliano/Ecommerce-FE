import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentMethod } from 'src/app/models/payment-method';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { emailPattern } from 'src/app/utils/pattern';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  newAccountForm!: FormGroup;
  methods = [
    PaymentMethod.BANK_DEPOSIT,
    PaymentMethod.CREDIT_CARD,
    PaymentMethod.PAYPAL
  ]

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.newAccountForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(emailPattern)]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required]
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
      })
    }, {validators: this.checkPasswords});
  }

  checkPasswords(form: any) { //'passwords' group
    let pass = form.get('password')?.value;
    let confirmPassword = form.get('confirmPassword')?.value;

    return pass === confirmPassword ? null : {notSame: true};
  }

  submit(form: FormGroup) {
    const user: User = {
      name: form.controls['name'].value,
      address: form.controls['address'].value,
      number: form.controls['number'].value,
      mainPaymentMethod: form.controls['paymentMethod'].value,
      email: form.controls['email'].value,
      password: form.controls['password'].value,
      role: Role.ROLE_USER
    }

    this.loginService.createUser(user).subscribe(response => {
      if(response.errors.length === 0) {
        this.loginService.login(user.email, user.password!).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    });
  }

}
