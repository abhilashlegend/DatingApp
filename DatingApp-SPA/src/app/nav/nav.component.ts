import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

	model: any = {};
	
	constructor(public authService: AuthService, private alertify: AlertifyService, 
		private router: Router, private appComponent: AppComponent) {
		// code...
	}

	ngOnInit() {
	}

	login() {
		this.appComponent.loading = true;
		this.authService.login(this.model).subscribe(next => {
			this.alertify.success('Logged in successfully');
			this.appComponent.loading = false;
		}, error => {
			this.alertify.error(error);
		}, () => {
			this.router.navigate(['/members']);
		});
	}

	loggedIn() {
		return this.authService.loggedIn();
	}

	logout() {
		localStorage.removeItem('token');
		this.alertify.message('logged out');
		this.router.navigate(['/home']);
	}
}