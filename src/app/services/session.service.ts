import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { ApiServiceService } from './api-service.service';
import { Login } from '../_model/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
   authTokenKey = 'userName';

  constructor(private authService: UserAuthService, private router: Router) {}

  initSession(): void {
    // Check if an authentication token exists in storage
    const storedToken = localStorage.getItem(this.authTokenKey);

    if (storedToken!= '') {
      // Add logic to validate the token against the server if necessary

      // If the token is valid, consider the user logged in
      this.router.navigate(['/dashboard'])
      // this.authService.login();
    }
  }

  loginUser(login: Login): boolean {
    // Authenticate the user and store the token
    const isAuthenticated = this.authService.login(login);

    if (isAuthenticated) {
      // Store authentication token
      localStorage.setItem(this.authTokenKey, this.authService.currentUser);
      console.log('local storage: ',localStorage.getItem(this.authTokenKey))
    }

    return isAuthenticated;
  }

  logoutUserAndClearSession(): void {
    // Logout the user and remove the token from storage
    this.authService.logout();
    localStorage.removeItem(this.authTokenKey);
  }
}
