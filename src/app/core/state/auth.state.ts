import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetUser, ResetUser } from '../actions/auth.actions';
import { User } from '../models/user';


@State<User>({
    name: 'auth',
    defaults: {
        realm: null,
        username: null,
        email: null,
        emailVerified: null
    }
})

export class AuthState {

    @Selector()
    static getCurrentUser(user: User) {
        return user;
    }

    @Action(SetUser)
    setAuth(context: StateContext<User>, { payload }: SetUser) {
        context.patchState(payload);
    }

    @Action(ResetUser)
    resetAuth(context: StateContext<User>) {
        context.patchState({
            realm: null,
            username: null,
            email: null,
            emailVerified: null
        });
    }

}
