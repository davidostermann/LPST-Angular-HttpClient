import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Iuser } from '../core/iuser';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private api: ApiService) {}

  users: Iuser[];
  errText: string;

  // users$;

  ngOnInit() {

    // this.users$ = this.api.getUsers()
    // .pipe(catchError(err => (this.errText = 'la requete a echoué')));
    this.api.getUsers().subscribe( (data: Iuser[]) => {
      this.users = data;
    }, err => this.errText = err.message );
  }
}
