import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { AuthState } from './core/state/auth.state';
import { Observable } from 'rxjs';
import { User } from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turing-solutions';

  @Select(AuthState.getCurrentUser) currentUser$: Observable<User>;
  isLoggedIn: boolean;

  constructor() {
    this.currentUser$
      .subscribe((currentUser: User) => {
        if (currentUser.username) {
          this.isLoggedIn = true;
        }
      });
  }
}
