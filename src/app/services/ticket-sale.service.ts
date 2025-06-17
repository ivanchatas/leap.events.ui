import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HighSales } from '../models/high-sales.model';
import { TicketSales } from '../models/tickect-sales.model';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TicketSaleService {
   apiUrl = `${environment.API_SERVER_URL}/SaleTicket`;
   
   constructor(private http: HttpClient) { }
 
   getHighestSellingByPrice(): Observable<HighSales[]> {
     return this.http.get<HighSales[]>(`${this.apiUrl}/highestSellingByPrice`);
   }
 
   getHighestSellingByAmount(): Observable<HighSales[]> {
     return this.http.get<HighSales[]>(`${this.apiUrl}/highestSellingByAmount`);
   }
 
   getTicketsByEventId(eventId: string): Observable<TicketSales[]> {
      return this.http.get<TicketSales[]>(`${this.apiUrl}/event/${eventId}`);
   }
}
