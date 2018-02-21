import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  constructor(private api: ApiService) {}

  selectedUser: Iuser;

  // permet de renvoyer this.selectedPost à chaque subscribe
  // la fct callback du subscribe est rappelée à chaque changement de this.selectedUser
  // https://stackoverflow.com/questions/44688706/make-observable-to-behave-like-promise-in-rxjs
  userReady$ = new BehaviorSubject<Iuser>(null);

  getUser(id): Observable<Iuser> {
    return this.api
      .getUser(id)
      .pipe(
        tap(u => (this.selectedUser = u)),
        tap(u => this.userReady$.next(u))
      );
  }

  update(): Observable<Iuser> {
    // console.log('USER-SERVICE this.selectedUser : ', this.selectedUser);
    return this.api.updateUser(this.selectedUser);
  }

  getUserPosts() {
    return this.api.getUserPosts(this.selectedUser.id);
  }
}
