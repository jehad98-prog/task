import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) { }

  ngOnInit() {
  }
  OnSave(){
    this.dialogRef.close();
  }
}
