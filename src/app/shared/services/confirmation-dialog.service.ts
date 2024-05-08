import { Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  template: `
  <h2 mat-dialog-title>Deletar Produto</h2>
  <mat-dialog-content>Tem certeza que deseja deletar este produto?</mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-raised-button color="primary" (click)="onNo()">Não</button>
    <button mat-raised-button color="accent" (click)="onYes()">Sim</button>
</mat-dialog-actions>
  `
})

export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);
  onNo = () => this.matDialogRef.close(false);
  onYes = () => this.matDialogRef.close(true);
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  matDialog = inject(MatDialog);

  openDialog = (): Observable<boolean> => this.matDialog.open(ConfirmationDialogComponent).afterClosed();
}
