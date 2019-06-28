import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SetUser, ResetUser } from 'src/app/core/actions/auth.actions';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { UserResponse } from 'src/app/core/models/user-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder,
    private store: Store,
    private userService: UserService,
    private router: Router) {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }
    );
  }



  ngOnInit() {
  }


  onSubmit() {
    if (this.loginFormGroup.valid) {
      this.user = this.loginFormGroup.value;
      // console.log(this.user);
      this.login()
    }
  }

  login() {
    this.userService.login(this.user.username, this.user.password)
      .subscribe((data: UserResponse) => {
        console.log(data);
        this.store.dispatch(new SetUser(
          {
            username: this.user.username,
            userResponse: { id: data.id, userId: data.userId }
          }
        ));
        setTimeout(this.logoutAfterTimePassed, 5 * 60 * 1000);
        this.router.navigateByUrl('home');
      })
  }

  logoutAfterTimePassed() {
    this.store.dispatch(new ResetUser());
  }

}
