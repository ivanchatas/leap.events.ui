import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface ErrorDialogData {
  title: string;
  message: string;
  type: 'error' | 'warning' | 'info';
  details?: string;
}

@Component({
  selector: 'app-error-dialog',
  imports: [ CommonModule, MatDialogModule, MatIconModule ],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorDialogData
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
