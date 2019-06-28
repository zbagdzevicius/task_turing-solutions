import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { AuthState } from '../state/auth.state';
import { User } from '../models/user';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    @Select(AuthState.getCurrentUser) currentUser$: Observable<User>;

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                access_token: 'melAyVAjqKA1eSiKC8d0DvsExnHp1YsNHwEFJbGgFCOufX14pnKgREKrsoBnWs1H'
            }
        })

        return next.handle(request);
    }

}