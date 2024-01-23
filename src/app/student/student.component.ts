// student.component.ts

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students = [
    {
      name: 'John Doe',
      rollNumber: '12345',
      className: '10th',
      imageUrl: 'path/to/john-doe.jpg',
      email: 'john@example.com',
      phone: '+1234567890',
      address: '123 Main St, City',
      parentName: 'Jane Doe',
      parentEmail: 'jane@example.com',
      parentPhone: '+9876543210',
    },
    // Add more student data as needed
  ];
  searchQuery: string = '';
  filteredStudents: any[] = [];
  selectedStudent: any = null;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.filteredStudents = [...this.students];
  }

  filterStudents(): void {
    this.filteredStudents = this.searchService.filterItems(
      this.students,
      this.searchQuery,
      'name'
    );
  }

  viewStudentDetails(student: any): void {
    // Implement the logic to display detailed view of the student
    this.selectedStudent = student;
    // You can navigate to a detailed view page or show a modal, etc.
  }

  editStudentDetails(student: any): void {
    // Implement the logic to edit student details
    // You can navigate to an edit page or show an editable modal, etc.
  }
}
