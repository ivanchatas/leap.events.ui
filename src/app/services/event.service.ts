import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ServiceBase } from './service-base';
import { Response } from '../models/response.model';
import { DialogService } from '../shared/services/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class EventService extends ServiceBase{

  constructor(http: HttpClient, dialogService: DialogService) {
    super(http, `${environment.API_SERVER_URL}/Event`, dialogService);
  }

  getUpcoming(days: number): Observable<Response<Event[]>> {
    return this.get<Response<Event[]>>(`upcoming?days=${days}`);
  }
}
