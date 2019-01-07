import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
	photos: any;

  constructor(private adminService: AdminService, private alertify: AlertifyService) { }

  ngOnInit() {
  	this.getPhotosForApproval();
  }

  getPhotosForApproval() {
  	this.adminService.getPhotoForApproval().subscribe((photos) => {
  		this.photos = photos;
  	}, error => {
  		this.alertify.error(error);
  	})
  }

  approvePhoto(photoId) {
  	this.adminService.approvePhoto(photoId).subscribe(() => {
  		this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
  	}, error => {
  		this.alertify.error(error);
  		console.log(error);
  	});
  }

  rejectPhoto(photoId) {
  	this.adminService.rejectPhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
      console.log(this.photos);
    }, error => {
  		this.alertify.error(error);
  		console.log(error);
  	});
  }

}
