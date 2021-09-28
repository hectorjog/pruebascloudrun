import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RestServiceService } from '../service/rest-service.service';

@Component({
  selector: 'app-elpost',
  templateUrl: './elpost.component.html',
  styleUrls: ['./elpost.component.css']
})
export class ElpostComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({brand: ['', Validators.required],model: ['', Validators.required]});
  datos:object=[];
  dtos:any;
  constructor(public service:RestServiceService,public formBuilder: FormBuilder) { }

  ngOnInit(): void {

   
  }
onSubmit(){

  this.datos={
   brand:this.formGroup.value.brand,
   model:this.formGroup.value.model
}
this.service.create(this.datos).subscribe((res)=>{

  this.dtos=JSON.stringify(res);
})
}
}
