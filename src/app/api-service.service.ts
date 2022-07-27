import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseURL: string = "http://localhost:9091/api/v1/";
  constructor(private _http: HttpClient) { }

  saveStudent(data: any){
   return this._http.post(this.baseURL+'signup', data);
  }

  getStudents(): any {
    return this._http.get(this.baseURL+"getstudents").forEach(
      res =>console.log(res)
    );
  }
  }
  
  

