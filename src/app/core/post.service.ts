import { Injectable } from '@angular/core';
import { Ipost } from './ipost';
import { ApiService } from './api.service';
import { tap, flatMap, map, concatMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  selectedPost: any;

  /** V1. NO NEED SUBJECT
   * si tu proteges bien ton composant avec un *ngIf
   * tu peux utiliser selectedPost sans soucis
   **/
  /** V2. MAIS C'EST BIEN AUSSI AVEC (encore moins de soucis)
   * BehaviorSubject stocke le resultat de la requete et renvoie celui-ci à chaque fois que sa methode subscribe est appelée
   * Il permet donc de se passer de selectedPost
   * https://stackoverflow.com/questions/44688706/make-observable-to-behave-like-promise-in-rxjs
   */
  // postReady$ = new BehaviorSubject<Ipost>(null);

  constructor(private api: ApiService, private userService: UserService) {}

  getPost(id: number) {
    return this.api.getPost(id).pipe(
      tap(post => (this.selectedPost = post))
      // tap(post => this.postReady$.next(post))
    );
    // return this.api.getPost(id).pipe(
    //   flatMap( post => this.userService.getUser(post.userId)
    //     .pipe( map( user => ({ ...post, user})))),
    //   tap( post => this.selectedPost = post)
    // );
  }

  create(post: Ipost) {
    return this.api.createPost(post);
  }

  update() {
    return this.api.updatePost(this.selectedPost);
  }

  delete(id: number): Observable<any> {
    return this.api.deletePost(id);
  }

  getTags() {
    return this.api.getTags();
  }
}
