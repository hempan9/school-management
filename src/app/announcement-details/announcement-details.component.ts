import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from '../_model/Announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css'],
})
export class AnnouncementDetailsComponent implements OnInit {
  announcement!: Announcement;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private announcementService: AnnouncementService
  ) {}
  ngOnInit(): void {
    const announcementId = this.route.snapshot.params['id'];
    console.log('calling announcement service for data id: ', announcementId);
    this.announcement = this.getAnnouncementById(announcementId);
    console.log('response received: ', this.announcement);
  }

  getAnnouncementById(announcementId: number): Announcement {
    return this.announcementService
      .getAnnouncementById(announcementId)
      .subscribe(
        (data: Announcement) => {
          this.announcement = data;
          return data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
