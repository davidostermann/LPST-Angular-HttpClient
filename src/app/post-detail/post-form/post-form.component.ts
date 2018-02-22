import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Ipost } from '../../core/ipost';
import { Itag } from '../../core/itag';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Ipost;
  tags: Itag[];
  editing: boolean;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.postService.getTags().subscribe( tags => this.tags = tags );

    const urlSegment = this.route.snapshot.url[0];
    if (urlSegment && urlSegment.path === 'edit') {
      this.post = this.postService.selectedPost;
      /** NO NEED si tu proteges bien ton composant avec un *ngIf
       * this.postService.postReady$.subscribe(post => this.post = post);
       */
      this.editing = true;
    } else {
      this.editing = false;
      this.post = {
        title: '',
        desc: '',
        text: '',
        img: '',
        online: false,
        level: 1,
        tagIds: [],
        userId: +this.route.parent.snapshot.paramMap.get('id')
      };

    }

  }

  onSubmit() {
    if (this.editing) {
      this.postService.update().subscribe();
    } else {
      this.postService.create(this.post).subscribe(
        newPost => {
          this.router.navigate(['/posts', newPost.id]);
        });
    }
    // else


  }
}
