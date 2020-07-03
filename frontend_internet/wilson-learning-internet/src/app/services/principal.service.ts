import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

	basePath = 'http://localhost:8000/';

	constructor(
		private http: HttpClient
	) { }

	postLogin(data) {
	    return this.http
	      .post(this.basePath + 'login', data, httpOptions)
	      .pipe(
	        retry(0)
	      );
  }
}
