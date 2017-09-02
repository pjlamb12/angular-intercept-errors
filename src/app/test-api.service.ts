import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestApiService {

	constructor(private http: HttpClient) { }

	purposelyErrorOnThisCall() {
		console.log('hello there');
		return this.http.get('/purposely-fail');
	}
}
