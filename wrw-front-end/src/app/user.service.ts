import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class UserService {
 private baseUrl = 'http://localhost:8082';
 constructor(private http: HttpClient) { }

saveUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
}
}
