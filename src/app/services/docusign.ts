import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Docusign {
  // private baseUrl = 'http://localhost:8000'; // your Node backend
  private baseUrl = 'https://docusign-project.onrender.com'; // your Node backend

  constructor(private http: HttpClient) {}

  sendAgreement(data: { name: string; email: string; company: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/form`, data, { responseType: 'text' });
  }

  getAllAgreements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/agreements`);
  }

  getAgreementById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/agreements/${id}`);
  }
}
