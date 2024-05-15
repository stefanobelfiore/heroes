import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroItem } from '@app/heroes/models/api/heroes-api.models';

@Component({
  selector: 'app-mat-confirm-dialog-custom',
  templateUrl: './mat-confirm-dialog-custom.component.html',
  styleUrls: ['./mat-confirm-dialog-custom.component.scss']
})
export class MatConfirmDialogCustomComponent {

  constructor(
    public dialogRef: MatDialogRef<MatConfirmDialogCustomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroItem,
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true)
  }

}
