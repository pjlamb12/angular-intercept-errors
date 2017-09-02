import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ToasterNotificationService } from './toaster-notification.service';


@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

	constructor(private injector: Injector) { }

	intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log(req);
		const toaster = this.injector.get(ToasterNotificationService);


		return next.handle(req)
			.do((ev: HttpEvent<any>) => {
				if (ev instanceof HttpResponse) {
					console.log('ev in the do: ', ev);
				}
			})
			.catch((response: any) => {
				if (response instanceof HttpErrorResponse) {
					console.log('response in the catch: ', response);
					toaster.error('Unexpected Error', response.message);
				}

				return Observable.throw(response);
			});
	}

}
