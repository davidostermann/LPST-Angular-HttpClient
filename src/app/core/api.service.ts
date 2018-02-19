import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';

const HOST = 'http://localhost:3000';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Iuser[]> {
    return this.http
    .get(`${HOST}/users`) as Observable<Iuser[]>;

    // .pipe(
    //   switchMap( u => data.map( u => newUser(u)))
    // )
  }

  getPosts(): Observable<Ipost[]> {
    return this.http.get(`${HOST}/posts`) as Observable<Ipost[]>;
  }
}
