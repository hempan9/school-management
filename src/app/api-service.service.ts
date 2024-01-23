import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Student} from "./_model/student";
import {Login} from "./_model/login";
import { catchError, throwError } from 'rxjs';

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
    return this._http.post(this.baseURL + 'signup', data, );
  }

  studentLogin(loginInfo: Login) {
    console.log("Logininfo: ",JSON.stringify(loginInfo));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
      // Add any other custom headers if needed
  });
    return this._http.post(this.baseURL + 'login', JSON.stringify(loginInfo), {headers}).pipe(catchError(this.handleError));
  }

private handleError(error: HttpErrorResponse) {
console.error('API error:', error);

// Return an observable with a user-facing error message
return throwError('Something went wrong. Please try again later.');
}
  getStudents(): any {
    return this._http.get(this.baseURL + "getstudents").forEach(
      res => console.log(res)
    );
  }
}



