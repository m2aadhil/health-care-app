import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
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
