import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'TOKEN_KEY';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router : Router) {}

  public saveToken(token : string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY) !== null ? window.sessionStorage.getItem(TOKEN_KEY) : null;
  }
  public getUser():string | null{
    const jwtToken = this.getToken();
    //console.log(jwtToken);
    //console.log(jwt_decode(jwtToken as string));
    const decodedToken: any = this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    return decodedToken != null ? decodedToken?.sub : null;
  }
  public getUserId():string | null{
    const jwtToken = this.getToken();
    const decodedToken: any = this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    return decodedToken != null ? decodedToken?.id : null;
  }
  public getRole(){
    const jwtToken = this.getToken();
    const decodedToken: any = this.getToken() != null ? jwt_decode(jwtToken as string) : null;
    console.log(decodedToken.role);
    return decodedToken != null ? decodedToken?.role : null;
  }

  signOut(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/Home'])
    .then(() => {
      window.location.reload();
    });
  }
  }