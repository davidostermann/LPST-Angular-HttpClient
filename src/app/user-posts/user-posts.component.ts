import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { Ipost } from '../core/ipost';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: Ipost[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserPosts().subscribe(
      posts => {
        this.posts = posts;
        console.log('posts : ', this.posts);
      }
    );
  }

}
