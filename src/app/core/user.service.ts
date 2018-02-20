import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private api: ApiService) {}

  selectedUser: Iuser;

  getUser(id): Observable<Iuser> {
    return this.api.getUser(id).pipe(tap(u => (this.selectedUser = u)));
  }

  update(): Observable<Iuser> {
    console.log('USER-SERVICE this.selectedUser : ', this.selectedUser);
    return this.api.updateUser(this.selectedUser);
  }

  getUserPosts() {
    return this.api.getUserPosts(this.selectedUser.id);
  }
}
