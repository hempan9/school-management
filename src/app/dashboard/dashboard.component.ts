import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { AnnouncementService } from '../services/announcement.service';
import { NavigationExtras, Router } from '@angular/router';
import { Announcement } from '../_model/Announcement';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pages: any;
  goToPage(_t26: any) {
    throw new Error('Method not implemented.');
  }
  announcements: Announcement[] = [];
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(
    private sessionService: SessionService,
    private announcementService: AnnouncementService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sessionService.initSession();
    console.log(localStorage.getItem(this.sessionService.authTokenKey))
    this.fetchAnnouncements();
  }

  fetchAnnouncements(): any {
    this.announcementService
      .getAllAnnouncments(this.currentPage, this.pageSize)
      .subscribe(
        (data: any[]) => {
          this.announcements = data;
          return data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getCurrentUser() {
    return localStorage.getItem(this.sessionService.authTokenKey);
  }
  previousPage() {
    console.log(' <- previous page: ', this.currentPage);
    this.currentPage--;
    this.fetchAnnouncements();
  }

  nextPage() {
    console.log('nextp age ->');

    this.currentPage++;
    this.announcements = this.fetchAnnouncements();
  }

  navigateToDetail(announcementId: number) {
    // Assuming announcement has an 'id' property, replace 'id' with your actual property name
    console.log('navigateToDetail to announcement id: ' + announcementId);
    // Navigate to the details page using the announcement

    this.router.navigate(['/announcement', announcementId]);
  }
}
