import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DialogService } from '../shared/services/dialog.service';

@Injectable()
export abstract class ServiceBase {
  
    constructor(
        protected http: HttpClient, 
        protected baseUrl: string,
        protected dialogService: DialogService
    ) { }

    protected get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  protected post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body).pipe(
      catchError(this.handleError.bind(this))
    );
  }

    protected handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        let errorTitle = 'API error';
        let errorDetails = '';

        if (error.error instanceof ErrorEvent) {
            errorMessage = `Connection error: ${error.error.message}`;
            errorDetails = error.error.message;
        } else {
            errorDetails = `Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`;
            console.error(errorDetails);

            switch (error.status) {
                case 400:
                    errorMessage = 'Bad request: ' + (error.error.message || 'Invalid data.');
                    break;
                case 401:
                    errorMessage = 'Unauthorized. Please log in again.';
                    break;
                case 403:
                    errorMessage = 'Access denied. You do not have permissions.';
                    break;
                case 404:
                    errorMessage = 'Resource not found.';
                    break;
                case 500:
                    errorMessage = 'Internal server error. Please try again later.';
                    break;
                default:
                    errorMessage = `Unknown error: ${error.status}. Please contact support.`;
            }
        }

        this.dialogService.openErrorDialog(errorMessage, errorTitle, errorDetails);

        return throwError(() => new Error(errorMessage));
    }
}