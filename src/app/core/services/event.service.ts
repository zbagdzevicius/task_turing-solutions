import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${environment.apiUrl}/Events`)
  }

  getUsers(eventId) {
    return this.http.get(`${environment.apiUrl}/Events/${eventId}/users`)
  }

  post(event: Event) {
    const formData = new FormData();
    formData.append('title', event.title);
    formData.append('title', event.city);
    formData.append('title', event.date);
    formData.append('userIds', event.userIds);
    return this.http.post(`${environment.apiUrl}/events/createWithUsers`, formData)
  }


}
