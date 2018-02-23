import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { ApiService } from './api.service';
import { tap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  constructor(private api: ApiService) {}

  selectedUser: Iuser;

  /** V1. NO NEED SUBJECT
   * si tu proteges bien ton composant avec un *ngIf
   * tu peux utiliser selectedUser sans soucis
   **/
  /** V2. MAIS C'EST BIEN AUSSI AVEC (encore moins de soucis)
   * BehaviorSubject stocke le resultat de la requete et renvoie celui-ci à chaque fois que sa methode subscribe est appelée
   * Il permet donc de se passer de selectedUser
   * https://stackoverflow.com/questions/44688706/make-observable-to-behave-like-promise-in-rxjs
   */
  // userReady$ = new BehaviorSubject<Iuser>(null);

  getUser(id): Observable<Iuser> {
    return this.api.getUser(id).pipe(
      tap(u => (this.selectedUser = u))
      // tap(u => this.userReady$.next(u)),
    );
  }

  create(user: Iuser): Observable<Iuser> {
    return this.api.createUser(user);
  }

  update(): Observable<Iuser> {
    // console.log('USER-SERVICE this.selectedUser : ', this.selectedUser);
    return this.api.updateUser(this.selectedUser);
  }

  delete(id: number): Observable<any> {
    return this.api.deleteUser(id);
  }

  getUserPosts() {
    return this.api.getUserPosts(this.selectedUser.id);
  }
}
