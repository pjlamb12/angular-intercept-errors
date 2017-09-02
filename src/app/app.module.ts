import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';

import { AppComponent } from './app.component';
import { TestApiService } from './test-api.service';
import { ToasterNotificationService } from './toaster-notification.service';
import { ErrorInterceptorService } from './error-interceptor.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ToasterModule
	],
	providers: [
		TestApiService,
		ToasterService,
		ToasterNotificationService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
