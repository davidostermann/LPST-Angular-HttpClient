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

  // permet de renvoyer this.selectedPost à chaque subscribe
  // la fct callback du subscribe est rappelée à chaque changement de this.selectedPost
  // https://stackoverflow.com/questions/44688706/make-observable-to-behave-like-promise-in-rxjs
  postReady$ = new BehaviorSubject<Ipost>(null);

  constructor(private api: ApiService, private userService: UserService) {}

  getPost(id: number) {
    return this.api
      .getPost(id)
      .pipe(
        tap(post => (this.selectedPost = post)),
        tap(post => this.postReady$.next(post))
      );
    // return this.api.getPost(id).pipe(
    //   flatMap( post => this.userService.getUser(post.userId)
    //     .pipe( map( user => ({ ...post, user})))),
    //   tap( post => this.selectedPost = post)
    // );
  }

  update() {
    return this.api.updatePost(this.selectedPost);
  }

  getTags() {
    return this.api.getTags();
  }
}
