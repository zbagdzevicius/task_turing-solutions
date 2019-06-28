import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate
} from '@angular/router';
import { Select } from '@ngxs/store';
import { AuthState } from '../state/auth.state';
import { User } from '../models/user';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    @Select(AuthState.getCurrentUser) currentUser$: Observable<User>;
    isLoggedIn: boolean;

    constructor(private router: Router) { }

    canActivate() {
        this.currentUser$
            .subscribe((currentUser: User) => {
                if (!currentUser.username) {
                    this.router.navigate(['']);
                }
                this.isLoggedIn = true;
            });
        return this.isLoggedIn;
    }

}
