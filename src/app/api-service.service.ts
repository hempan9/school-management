import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Student} from "./_model/student";
import {Login} from "./_model/login";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseURL: string = "http://localhost:9091/api/v1/";

  constructor(private _http: HttpClient) {
  }

  saveStudent(data: Student) {
    return this._http.post(this.baseURL + 'signup', data);
  }

  studentLogin(loginInfo: Login) {
    console.log("Logininfo: ",loginInfo)
    return this._http.post(this.baseURL + 'login', loginInfo);
  }

  getStudents(): any {
    return this._http.get(this.baseURL + "getstudents").forEach(
      res => console.log(res)
    );
  }
}



