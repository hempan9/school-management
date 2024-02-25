import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from '../_model/Announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private _http: HttpClient) {}

  baseURL: string = 'http://localhost:9091/api/v1/';

  getAllAnnouncments(page: number, size: number): any {
    const params = new HttpParams().append('page', page).append('size', size);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
    return this._http.get(this.baseURL + 'announcements', { headers, params });
  }

  getAnnouncementById(announcementId: number): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });

    return this._http.get(`${this.baseURL}announcement/${announcementId}`, {
      headers,
    });
  }
}
