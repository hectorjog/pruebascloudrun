import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  REST_API: string ='https://backpy-vigxsmwe2a-uc.a.run.app';
  

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  getData():Observable<any>{
    console.log();
    let API=this.REST_API;
    return this.httpClient.get(API,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 
      
        return data;
      }), catchError( error => {
        return throwError( 'Ocurrio un problema.' );
      })
    )
    
  }
  create(datos:any) :Observable<any> {
  
    let API=`${this.REST_API}/v1/create`;
console.log("estas es las rura "+API+" y estos son los datos "+datos);
//return datos
    return this.httpClient.post(API,datos,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 
        
        return data;
      }), catchError( error => {
        return throwError( 'Ocurrio un problema.'+ JSON.stringify(error) );
      })
    )

  }     


  update(datos:any) :Observable<any> {
  
    let API=`${this.REST_API}/v1/update/50`;
console.log("estas es las rura "+API+" y estos son los datos "+datos);
//return datos
    return this.httpClient.post(API,datos,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 
        
        return data;
      }), catchError( error => {
        return throwError( 'Ocurrio un problema.'+ JSON.stringify(error) );
      })
    )

  }     
  delete(datos:any) :Observable<any> {
  
    let API=`${this.REST_API}/v1/delete/`+datos.year;
//return datos
    return this.httpClient.post(API,datos,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 
        
        return data;
      }), catchError( error => {
        return throwError( 'Ocurrio un problema.'+ JSON.stringify(error) );
      })
    )

  }     
  

}
