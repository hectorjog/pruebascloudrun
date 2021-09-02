import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../service/rest-service.service';

@Component({
  selector: 'app-elget',
  templateUrl: './elget.component.html',
  styleUrls: ['./elget.component.css']
})
export class ElgetComponent implements OnInit {
  valor_devuelto:string="";
  constructor(public service:RestServiceService) { }
  
  ngOnInit(): void {
 
    this.service.getData().subscribe((res)=>{
this.valor_devuelto=JSON.stringify(res);


    })
  }

}
