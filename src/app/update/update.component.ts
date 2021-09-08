import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RestServiceService } from '../service/rest-service.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({brand: ['', Validators.required],model: ['', Validators.required]});
  datos:object=[];
  dtos:any;
  brandi:string="Chevrolet";
  model:string ="Camaro";

  
  constructor(public service:RestServiceService,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup.setValue({
      brand: this.brandi, 
      model: this.model
    });

  }
  onSubmit(){

    this.datos={
     brand:this.formGroup.value.brand,
     model:this.formGroup.value.model
  }
  this.service.update(this.datos).subscribe((res)=>{
  
    this.dtos=JSON.stringify(res);
  })
  }

}
