import { Injectable } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class ToasterNotificationService {
	constructor(public toasterService: ToasterService) {}

	private pop(type, title, message) {
		this.toasterService.popAsync(type, title, message);
	}

	public error(title, message) {
		this.pop('error', title, message);
	}

	public success(title, message) {
		this.pop('success', title, message);
	}

	public warning(title, message) {
		this.pop('warning', title, message);
	}

	public info(title, message) {
		this.pop('info', title, message);
	}
}
