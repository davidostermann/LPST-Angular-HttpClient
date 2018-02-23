import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../core/post.service';
import { Ipost } from '../core/ipost';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Ipost;
  errText: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(
      post => {
        this.post = post;
        // this.userService.getUser(id).subscribe(

        // )
      },
      // tslint:disable-next-line:quotemark
      err => (this.errText = "Cet article n'existe pas")
    );
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed : ', result);
      if (result) {
        this.deletePost();
      }
    });
  }

  deletePost() {
    this.postService.delete(this.post.id).subscribe(() => {
        this.router.navigate(['../'], {
          relativeTo: this.route
        });
      }, err => {
        console.log(err);
      });
  }
}

