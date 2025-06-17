import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent, ErrorDialogData } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openErrorDialog(message: string, title: string = 'Error', details?: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data: {
        title: title,
        message: message,
        type: 'error',
        details: details
      } as ErrorDialogData,
      disableClose: true
    });
  }

  openWarningDialog(message: string, title: string = 'Warning', details?: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data: {
        title: title,
        message: message,
        type: 'warning',
        details: details
      } as ErrorDialogData,
      disableClose: true
    });
  }

  openInfoDialog(message: string, title: string = 'Information', details?: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data: {
        title: title,
        message: message,
        type: 'info',
        details: details
      } as ErrorDialogData,
      disableClose: false
    });
  }
}
