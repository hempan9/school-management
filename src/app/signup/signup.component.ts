import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiServiceService) {}

  ngOnInit(): void {}

  signUp(data: any) {
    console.warn(data);

    this.apiService.saveStudent(data).subscribe((result) => {
      if (result.toString().includes('NOT_MODIFIED')) {
        alert('Student is already registered, Please sign in. ');
        console.log('Response API: ***** \n', result);
      } else {
        console.log('Response from API: ***** \n', result);
        alert('Successfully saved.');
        this.router.navigate(['/', 'login']).then((r) => r.valueOf());
      }

      // this.apiService.getStudents();
    });
  }
}
