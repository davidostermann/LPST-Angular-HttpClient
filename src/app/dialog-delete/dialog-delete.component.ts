import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
