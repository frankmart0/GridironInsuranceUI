import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuredApiService {

  readonly insuredAPIUrl = "https://localhost:7082/api";

  constructor(private http:HttpClient) {}

  getInsuredList():Observable<any[]>{
    return this.http.get<any>(this.insuredAPIUrl + '/insureds');
  }

  addInsured(data:any){
    return this.http.post(this.insuredAPIUrl + '/insureds', data);
  }

  updateInsured(id:number|string, data:any){
    return this.http.put(this.insuredAPIUrl + `/insureds/${id}`, data);
  }

  deleteInsured(id:number|string){
    return this.http.delete(this.insuredAPIUrl + `/insureds/${id}`);
  }

  /* GetAllStates():Observable<any[]>{
    return this.http.get<any>( this.insuredAPI + '/insureds/GetAllStates')
  } */

}

  

   
   
   

