import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.css']
})
export class VaccinationsComponent implements OnInit {
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
