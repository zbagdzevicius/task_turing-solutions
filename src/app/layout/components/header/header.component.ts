import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { ResetUser } from 'src/app/core/actions/auth.actions';
import { AuthState } from 'src/app/core/state/auth.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Select(AuthState.getCurrentUser) currentUser$: Observable<User>;
  userLoggedIn: boolean;

  constructor(private store: Store,
    private router: Router) {
    this.currentUser$
      .subscribe((currentUser: User) => 
      this.userLoggedIn = currentUser.username ? true : false);
  }

  ngOnInit() {
  }


  logout() {
    this.store.dispatch(new ResetUser());
  }

  navigate(url) {
    this.router.navigateByUrl(url)
  }

}
