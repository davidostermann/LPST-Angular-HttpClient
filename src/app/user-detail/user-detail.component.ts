import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  id: number;

  ngOnInit() {
    //this.id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe( params => {
      this.id = +params.get('id');
    });
  }
}
