import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { TestApiService } from './test-api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	constructor(private testApi: TestApiService) {}

	public toasterConfig: ToasterConfig = new ToasterConfig({
		animation: 'flyLeft',
		showCloseButton: true,
		timeout: 0,
		mouseoverTimerStop: false,
		positionClass: 'toast-top-center'
	});

	makeFakeApiCall() {
		console.log('hello');
		this.testApi.purposelyErrorOnThisCall()
			.subscribe((data: any) => console.log(data));
	}
}
