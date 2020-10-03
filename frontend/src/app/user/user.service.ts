import { Injectable } from '@angular/core';
import { User } from "./user";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    return this.http.post('/user/register', user);
  }
}
