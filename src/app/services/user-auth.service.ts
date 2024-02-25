import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './api-service.service';
import { Login } from '../_model/login';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {

currentUser='';

  constructor(private router: Router, private apiService: ApiServiceService) {
    if (localStorage.getItem('userName') === '') {
      console.log('Login required.');
      router.navigate(['']);
    }
  }

  login(login: Login): boolean{
    console.log('Request is : ', login);
    this.apiService.studentLogin(login).subscribe({
      next: (res) => {
        console.log('Response: ', res);
        var response = JSON.stringify(res);
        const parsed = JSON.parse(response);
        if (
          parsed.username === login.username &&
          parsed.password === login.password
        ) {
          this.currentUser=parsed.userName;
          this.router.navigate(['/', 'home']).then((r) => r.valueOf());
          return true;
        } else {
          window.alert('Incorrect login credentials. Please try again');
          console.log('Failed to login.');
          return false;
        }
      },
      error: (err) => {
        console.log('Error occurred.', err);
      },
    });
    return false;

  }
  logout() {
    console.log('Logging out');
    this.currentUser='';
  }

}
