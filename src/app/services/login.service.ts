import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Observable} from 'rxjs';
import { tap, filter } from "rxjs/operators";
import { BASE_URL } from '../app.api';

import { ApiResponse } from '../models/api-response';
import { UserDto } from '../models/authentication-user';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _authenticationUser!: UserDto;
  lastUrl!: string;

  get authenticationUser(): UserDto {
    const authenticationUser: UserDto = {
      email: localStorage.getItem('userEmail')!,
      token: localStorage.getItem('userToken')!
    }
    this._authenticationUser = authenticationUser;
    return authenticationUser;
  }

  set authenticationUser(authenticationUser) {
    localStorage.setItem('emailEmail', authenticationUser.email),
    localStorage.setItem('userToken', authenticationUser.token!),
    this._authenticationUser = authenticationUser;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => this.lastUrl = e.url);
  }

  isUserLoggedIn(): boolean {
    return this.authenticationUser.email !== null || this.authenticationUser.token !== null;
  }

  login(email: string, password: string): Observable<ApiResponse<UserDto>> {
    return this.http.post<ApiResponse<UserDto>>(`${BASE_URL}/auth`, {email: email, password: password}).pipe(tap(res => this.authenticationUser = res.data));
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

  logout() {
    this.authenticationUser = undefined!;
  }

  updateLoginUser(authenticationUser: UserDto) {
    this.authenticationUser = authenticationUser;
  }

  createUser(user: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${BASE_URL}/api/user`, user);
  }

  getUserByToken(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${BASE_URL}/api/user`);
  }
}
