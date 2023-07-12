import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ErrorsStateMatcher } from 'src/app/Error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  //Declaration
  //Check the form is submitted or not yet
  isSubmited: boolean = false;
  //Hide attribute for the password input
  hide: boolean = true;
  //Login is failed case
  isLoginFailed = false;
  //To display Login Error in case of failure
  errorMessage = '';

  //form validators
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  //get all Form Fields
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  // match errors in the submition of form
  matcher = new ErrorsStateMatcher();
  
  // submit fntc
  onSubmit() {
    const LoginInfo = {
      username: this.username?.value,
      password: this.password?.value,
    };
    if (this.form.valid) {
      this.userService.signIn(LoginInfo.username, LoginInfo.password).subscribe({
        next: (data: any) => {
          console.log(data);
          this.authService.saveToken(data.access_token);
          this.isLoginFailed = false;
          window.location.reload();
        },
        error: (err: Error) => {
          this.errorMessage = err.message;
          this.isLoginFailed = true;
          this._snackBar.open(this.errorMessage, '❌');
        },
      });
    } else {
      this._snackBar.open('Enter a valid informations !!!', '❌');
    }
  }
}