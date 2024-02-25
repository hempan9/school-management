import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ApiServiceService } from '../services/api-service.service';
import { Student } from '../_model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchTerm: string = '';
  newStudent: Student = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    password: '',
    studentId: 0,
    departmentId: 0,
  };

  currentPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(
    private searchService: SearchService,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.fetchAllStudents();
  }

  fetchAllStudents(): void {
    this.apiService
      .getAllStudents(this.currentPage, this.pageSize)
      .subscribe((students: Student[]) => {
        this.students = students;
        this.filteredStudents = students;
        this.calculateTotalPages();
      });
  }

  search(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredStudents = this.students;
      return;
    }
    this.filteredStudents = [];
    this.students.forEach((student) => {
      console.log('searching for student');
      if (this.searchTerm.match(student.firstName))
        this.filteredStudents.push(student);
      console.log('found student: ', student);
    });
    console.log('found matches: ', this.filteredStudents);
    return;
  }

  addStudent(): void {
    // if (
    //   this.newStudent.firstName &&
    //   this.newStudent.lastName &&
    //   this.newStudent.address
    // ) {
    //   this.studentService.addStudent(this.newStudent).subscribe(() => {
    //     // Refresh the list of students after adding a new student
    //     this.fetchAllStudents();
    //     // Clear the form fields
    //     this.newStudent = { firstName: '', lastName: '', address: '' };
    //   });
    // }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchAllStudents();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchAllStudents();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.fetchAllStudents();
    }
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.students.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
