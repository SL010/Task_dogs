import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; // Замените на ваш URL

  constructor(private http: HttpClient) {}

  getDogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dogs/`);
  }

  createDog(dogData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/dogs/`, dogData);
  }

  getMessages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/message/`);
  }

  sendMessage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/message/`, data);
  }
}
