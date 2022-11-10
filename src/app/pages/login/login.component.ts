import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { emailPattern } from 'src/app/utils/pattern';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  navigateTo!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(emailPattern)]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
    //The btoa() method creates a Base64-encoded ASCII string from a binary string
    //(i.e., a string in which each character in the string is treated as a byte of binary data).
    //You can use this method to encode data which may otherwise cause communication problems,
    //transmit it, then use the atob() method to decode the data again.
    //For example, you can encode control characters such as ASCII values 0 through 31.
  }

  submit(loginForm: FormGroup) {
    this.loginService.login(
      loginForm.controls['email'].value, loginForm.controls['password'].value)
      .subscribe(() => {
        this.router.navigate([atob(this.navigateTo)]);
      });
  }

}
