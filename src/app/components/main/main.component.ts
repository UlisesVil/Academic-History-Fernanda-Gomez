import { Component, OnInit } from '@angular/core';
import { History } from '../../services/historyList';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public mainData:{[key:string]:string};
  public history:any;

  constructor(

  ) { }

  ngOnInit(): void {
    this.mainData={
      'university':'Universidad Autónoma de la Ciudad de México',
      'enrollment':'18-011-0381',
      'campus':'Cuautepec',
      'degree':'Comunicacion y Cultura',
      'student':'GOMEZ SAAVEDRA FERNANDA MONTSERRAT'
    }

    this.history=History;
  }

}
