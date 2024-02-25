import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  editProfile() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {}
  logout(): void {
    window.alert('Logout?');
    console.log('Logged out!');
    this.router.navigate(['/', 'login']);
  }
  getLoggedInUser() {
    return this.userAuthService.currentUser;
  }
}
