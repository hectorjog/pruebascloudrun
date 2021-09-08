import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../service/strapi.service';

@Component({
  selector: 'app-strapi',
  templateUrl: './strapi.component.html',
  styleUrls: ['./strapi.component.css']
})
export class StrapiComponent implements OnInit {
datas:any=[];
errores:string="";

  constructor(public strapiserv:StrapiService) { }

  ngOnInit(): void {

    this.strapiserv.getData().subscribe(res=>{

this.datas= res as string[];

    }, error =>{
      console.log(error);
        if(error.status == 0){
this.errores="Código del error: "+error.status+" \n Ha ocurrido un error del lado del cliente o un error de red.";
}else{

  this.errores="Código del error: "+error.status+"\n\n"+error.statusText;
    }
  })
}

}
