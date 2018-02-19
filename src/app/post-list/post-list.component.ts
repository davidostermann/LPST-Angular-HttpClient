import { Component, OnInit } from '@angular/core';
import { Ipost } from '../core/ipost';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(private api: ApiService) {}

  posts: Ipost[];
  errText: string;

  ngOnInit() {
    this.api.getPosts().subscribe(
      posts => this.posts = posts,
      err => this.errText = 'La requete a echouée !'
    );
  }
}
