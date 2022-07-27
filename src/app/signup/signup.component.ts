import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { Student } from '../_model/Student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private _http: HttpClient
    , private router: Router, private apiService: ApiServiceService,
    private route: ActivatedRoute
    )
  { }

  ngOnInit(): void {

  }


signUp(data:any){
  console.warn(data);

    this.apiService.saveStudent(data)
    .subscribe(result => {
      console.warn(result);
      this.router.navigate(['/','login']);
      alert("Successfully saved.")
    })

}

}
