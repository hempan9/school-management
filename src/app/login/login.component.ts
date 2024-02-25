import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Login } from '../_model/login';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login.ts',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  filteredStudents: any;
  loginError: boolean = false;
  loginErrorServer: boolean = false;

  search() {
    throw new Error('Method not implemented.');
  }
  searchTerm: any;
  constructor(
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {}

  login(login: Login) {
    console.log('Request is : ', login);
    this.sessionService.loginUser(login)
    this.sessionService.initSession()
  }
}
