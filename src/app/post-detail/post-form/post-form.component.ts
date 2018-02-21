import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Ipost } from '../../core/ipost';
import { Itag } from '../../core/itag';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Ipost;
  tags: Itag[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getTags().subscribe(
      // tags => this.tags = tags
      (tags) => {
        this.tags = tags;
        console.log('this.tags : ', this.tags);
      }
    );
    // this.post = this.postService.selectedPost;
    console.log('INIT this.postService.selectedPost : ', this.postService.selectedPost);

    this.postService.postReady$.subscribe(post => {
      console.log('SUB post : ', post);
      console.log('SUB this.postService.selectedPost : ', this.postService.selectedPost);
      this.post = post;
    });
  }

  onSubmit() {
    this.postService.update().subscribe();
  }
}
