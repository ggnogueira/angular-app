import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // User Status
  isLoggedIn!: boolean;
  constructor(private authService : AuthService){}

  ngOnInit(): void {
    // check if the token exist in session storage
    this.isLoggedIn = !!this.authService.getToken();
  }

  //get user Email Method
  getUserName() {
    return this.authService.getUser();
  }
  
  //Method to logout
  signOut() {
    this.authService.signOut();
  }
}
