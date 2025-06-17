import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HighSales } from '../models/high-sales.model';
import { TicketSales } from '../models/tickect-sales.model';
import { environment } from '../../environments/environment.development';
import { Response } from '../models/response.model';
import { ServiceBase } from './service-base';
import { DialogService } from '../shared/services/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class TicketSaleService extends ServiceBase {
   
  constructor(http: HttpClient, dialogService: DialogService) {
    super(http, `${environment.API_SERVER_URL}/SaleTicket`, dialogService);
  }
 
  getHighestSellingByPrice(): Observable<Response<HighSales[]>> {
    return this.get<Response<HighSales[]>>(`highestSellingByPrice`);
  }
 
  getHighestSellingByAmount(): Observable<Response<HighSales[]>> {
    return this.get<Response<HighSales[]>>(`highestSellingByAmount`);
  }
  
  getTicketsByEventId(eventId: string): Observable<Response<TicketSales[]>> {    
    return this.get<Response<TicketSales[]>>(`event/${eventId}`);
  }
}
