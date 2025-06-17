import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl = `${environment.API_SERVER_URL}/Event`;

  constructor(private http: HttpClient) { }

  get(days: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/upcoming?days=${days}`);
  }
}
