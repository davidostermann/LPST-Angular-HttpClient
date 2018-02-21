import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { Ipost } from '../core/ipost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: Ipost[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // attention si getUserPosts est declenché
    // avant que this.userService.selectedPost soit assigné,
    // cela va aussi créer une erreur
    this.userService.getUserPosts().subscribe(posts => {
      this.posts = posts;
      console.log('posts : ', this.posts);
    });
  }

  selectPost(id: number) {
    this.router.navigate(['/posts', id]);
  }

}
