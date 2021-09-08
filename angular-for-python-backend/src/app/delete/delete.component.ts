import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RestServiceService } from '../service/rest-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    year: ['', Validators.required]});
  datos:object=[];
  dtos:any;
year:number=1964;
  constructor(public service:RestServiceService,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup.setValue({
      year: this.year
    });
  }
  onSubmit(){

    this.datos={
     year:this.formGroup.value.year
    
  }
 
  this.service.delete(this.datos).subscribe((res)=>{
  
    this.dtos=JSON.stringify(res);
  })
  }
}
