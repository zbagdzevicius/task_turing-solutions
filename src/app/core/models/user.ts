import { UserResponse } from './user-response';

export interface User {
    realm?: string;
    username: string;
    email?: string;
    emailVerified?: boolean;
    userResponse: UserResponse;
    password?: string;
}
