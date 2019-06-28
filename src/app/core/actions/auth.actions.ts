import { User } from '../models/user';

export class SetUser {
    static readonly type = '[auth] set user';
    constructor(public payload: User) { }
  }
  
  export class ResetUser {
    static readonly type = '[auth] reset user';
  }
  export class GetUser {
    static readonly type = '[auth] get user';
  }
  
