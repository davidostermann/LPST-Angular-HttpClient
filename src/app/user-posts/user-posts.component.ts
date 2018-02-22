import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../core/user.service';
import { Ipost } from '../core/ipost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit, OnDestroy {
  posts: Ipost[];
  getPostSubscription;

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    // attention si getUserPosts est declenché
    // avant que this.userService.selectedUser soit assigné,
    // cela va aussi créer une erreur
    // Du coup, on wrap l'appel de getPosts dans userReady$
    console.log('ngOnInit USER-POSTS');
    // this.userReadySubscription = this.userService.userReady$.subscribe(this.getUserPosts.bind(this));
    // this.getUserPosts();
     this.getPostSubscription = this.userService
      .getUserPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  // getUserPosts() {
  //   console.log('getUserPosts USER-READY');
  //   this.userService.getUserPosts().subscribe(posts => {
  //     this.posts = posts;
  //   });
  // }

  selectPost(id: number) {
    this.router.navigate(['/posts', id]);
  }

  ngOnDestroy() {
    this.getPostSubscription.unsubscribe();
  }
}
