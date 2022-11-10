import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BASE_URL } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User>(`${BASE_URL}/user`).pipe(tap(user => this.user = user));
  }
}
