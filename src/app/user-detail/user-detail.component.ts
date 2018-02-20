import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../core/iuser';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  id: number;
  user: Iuser; // undefined
  errText: string;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    // this.route.paramMap.subscribe( params => {
    //   this.id = +params.get('id');
    // });
    this.userService
      .getUser(this.id)
      .subscribe(
        user => (this.user = user),
        error => (this.errText = 'la requete a echoué')
      );
  }
}
