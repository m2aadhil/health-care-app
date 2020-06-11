import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html'
})
export class MeasurementsComponent implements OnInit {
  uom:string = "";
  measurementType:string = "";
  value:string = "";
  note:string = "";
  date:Date ;
  chart;

  constructor() { }

  ngOnInit(): void {
    
    this.chart = new Chart('canvas', {
      type: 'line',
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Measurement'
            }
          }],
        }
      },
      data: {
          labels: ['10/12/2020', '10/12/2020', '10/12/2020', '10/12/2020', '10/12/2020', '10/12/2020'],
          datasets: [{
              label: '# of Votes',
              data: [6, 5, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }
  });
  this.chart.update(); 

  }

  fillUOM(): void {
    switch(this.measurementType) { 
        case 'Sugar level': { 
          this.uom = 'mmol/L';
          break; 
        } 
        case 'Blood temperature': { 
          this.uom = 'mmHg';
          break; 
        } 
        case 'Pulse Rate': { 
          this.uom = 'Beats/min';
          break; 
        } 
        case 'Weight': { 
          this.uom = 'kg';
          break; 
        } 
        case 'Height': { 
          this.uom = 'cm';
          break; 
        } 
        default: { 
          this.uom = '*';
          break; 
        } 
    }
  }



}

