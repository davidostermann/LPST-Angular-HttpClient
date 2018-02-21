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
    this.postService.getTags().subscribe( tags => this.tags = tags );
    this.post = this.postService.selectedPost;
    /** NO NEED si tu proteges bien ton composant avec un *ngIf
     * this.postService.postReady$.subscribe(post => this.post = post);
     */
  }

  onSubmit() {
    this.postService.update().subscribe();
  }
}
