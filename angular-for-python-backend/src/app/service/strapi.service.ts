import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  REST_API: string ='http://localhost:1337/articles';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  getData():Observable<any>{
    console.log();
    let API=this.REST_API;
    return this.httpClient.get(API,{headers:this.httpHeaders}) .pipe(
      map((data:any) => { 
      
        return data;
      }), catchError( error => {
        return throwError(error);
      })
    )
    
  }
 
 
}
