import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from 'src/app/interface/user';





@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  submit(email: string, password: string): Observable<string> {
    var userObj: IUser;
    userObj = { email: email, password: password };
    return this.http.post<string>('https://quickkartservice.azurewebsites.net/api/Values/login', userObj).pipe(catchError(this.errorHandler));
  }

  submit1(email: string, password: string): Observable<string> {
    var userObj: IUser;
    userObj = { email: email, password: password };
    return this.http.put<string>('https://quickkartservice.azurewebsites.net/api/Values/Update', userObj).pipe(catchError(this.errorHandler));
  }

  add(name: string, email: string, password: string): Observable<string> {
    var userObj: IUser;
    userObj = { name: name, email: email, password: password};
    return this.http.post<string>('https://quickkartservice.azurewebsites.net/api/Values/newUser', userObj).pipe(catchError(this.errorHandler));
  }

  

  info(name: string): Observable<string> {
    var userObj: IUser;
    userObj = { name: name }
    return this.http.post<string>('https://quickkartservice.azurewebsites.net/api/Values/info', userObj).pipe(catchError(this.errorHandler));
  }

  trailer(name: string): Observable<URL> {

    var userObj: IUser;
    userObj = { name: name }
    return this.http.post<URL>('https://quickkartservice.azurewebsites.net/api/Values/trailer', userObj).pipe(catchError(this.errorHandler));
  }

  movie(name: string): Observable<URL> {

    var userObj: IUser;
    userObj = { name: name }
    return this.http.post<URL>('https://quickkartservice.azurewebsites.net/api/Values/movie', userObj).pipe(catchError(this.errorHandler));
  }

  addwlis(email: string, name : string) : Observable<string> {
    var userObj: IUser;
    userObj = { email: email, name: name };
    return this.http.post<string>('https://quickkartservice.azurewebsites.net/api/Values/wlist', userObj).pipe(catchError(this.errorHandler));
  }

  getwlis(email: string): Observable<any> {
    var userObj: IUser;
    userObj = { email: email };
    return this.http.post<any>('https://quickkartservice.azurewebsites.net/api/Values/getwlist', userObj).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
