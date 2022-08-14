import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {Login} from "../_model/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login.ts',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(value: any) {
    console.log("Request is : ",value)
    this.apiService.studentLogin(value)
      .subscribe(
        a => {
        console.log("Response: ", a)
          var response = JSON.stringify(a);
          if (response.includes('FAILURE')){
            console.log("Failed to login.")
            return;
          }
          else {
            this.router.navigate(['/','home']).then(r=> r.valueOf())
          }
        }
      )

  }
}
