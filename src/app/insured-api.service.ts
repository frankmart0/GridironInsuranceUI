import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, finalize, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuredApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  };

  readonly insuredAPIUrl = "https://localhost:7082/api";

  constructor(private http:HttpClient) {}

  getInsuredList():Observable<any[]>{
    return this.http.get<any>(this.insuredAPIUrl + '/insureds');
  }

  addInsured(data:any){
    return this.http.post(this.insuredAPIUrl + '/insureds', JSON.stringify(data), this.httpOptions)
          .pipe(
            map(res => res),
            catchError(err => { return this.errorHandler(err) })
          );
  }

  updateInsured(data:any){
    return this.http.put(this.insuredAPIUrl + `/insureds/${data.id}`, data);
  }

  deleteInsured(id:number|string){
    return this.http.delete(this.insuredAPIUrl + `/insureds/${id}`);
  }

  errorHandler(error: HttpErrorResponse) {
    debugger;
    console.log(error.message || "server error.");
    return of(error.message || "server error.");
  }

  /* GetAllStates():Observable<any[]>{
    return this.http.get<any>( this.insuredAPI + '/insureds/GetAllStates')
  } */

}







