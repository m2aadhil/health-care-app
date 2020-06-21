import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reportId:string = "";
  reportTitle:string = "";
  specialization:string = "";
  provider:string = "";
  doctor:string = "";
  result:string = "";
  docnote:string = "";
  patientnote:string = "";
  attachment:string = "";
  flag:string = "";
  cost:string = "";
  date:Date;  
  measurementType :string = "";
  measurevalue :string = "";

  constructor() { }

  ngOnInit(): void {

  }

}

