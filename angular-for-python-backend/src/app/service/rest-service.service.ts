import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  REST_API: string ='http://localhost:5000';
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

  /*sendtocalendar(dato) :Observable<any> {
    console.log(dato);
    let API=`${this.REST_API}/create/`;

    return this.httpClient.post(API,dato,{headers:this.httpHeaders}) .pipe(
      map((data:any) => {    
        return data;
      }), catchError( error => {
        return throwError( 'Ocurrio un problema.' );
      })
    )

  }     
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }*/

}
