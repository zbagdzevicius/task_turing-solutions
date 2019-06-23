import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${environment.apiUrl}/Users`)
  }
  getEvents(userId) {
    return this.http.get(`${environment.apiUrl}/Users/${userId}/Events`)
  }
  login(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/Users`, { username, password })
  }
  register(user: User) {
    return this.http.get(`${environment.apiUrl}/Users`)
  }
}
