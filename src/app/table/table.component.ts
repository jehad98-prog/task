import { AddDialogComponent } from './../add-dialog/add-dialog.component';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Data {
  Description: string;
  URL: string;
  Attachment: string;
  Actions: string;
}
const ELEMENT_DATA: Data[] = [
  
  {Description:'option 1 for the poster', URL:'',Attachment:'poster1.jpg',Actions:'/'},
  {Description:'option 2 for the poster', URL:'',Attachment:'poster2.jpg',Actions:'/'}
  
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})






export class TableComponent implements OnInit {


  displayedColumns: string[] = ['Description', 'URL', 'Attachment', 'Actions'];


 
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }


  Comment(){
    const dialogRef = this.dialog.open(DialogComponent, {
      
  });
}

OnAdd(){
  const dialogRef = this.dialog.open(AddDialogComponent, {
    
});
}



}
