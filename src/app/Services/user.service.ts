import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

const  APIUrlUser ="http://localhost:8000/api/v1/users";
const  APIUrlAuth =" http://localhost:8000/api/v1/token";

@Injectable({
  providedIn: 'root'
})
export class UserService  extends DataService{
  constructor(http:HttpClient,private httpPrivate : HttpClient){
    super(APIUrlUser,http);
  }

  // Login Method
  signIn(username : string,password : string): Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.httpPrivate.post(APIUrlAuth, `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`, { headers });
  }
}