import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/model/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl: string = `${environment.apiLocalUrl}`;

  constructor(private http: HttpClient) {}

  getData(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/api/clients/all`);
  }

  getBySharedKey(sharedKey: string): Observable<Object> {
    return this.http.get(
      `${this.apiUrl}/api/clients/find-sharedkey?sharedKey=${sharedKey}`
    );
  }

  saveClient(client: Client) {
    return this.http.post(`${this.apiUrl}/api/clients/new`, client);
  }
}
