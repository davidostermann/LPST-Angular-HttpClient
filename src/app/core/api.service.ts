import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';
import { User } from './user';
import { map } from 'rxjs/operators';

const HOST = 'http://localhost:3000';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Iuser[]> {
    return this.http.get(`${HOST}/users`) as Observable<Iuser[]>;
    // .pipe(
    //   map( (d: Iuser[]) => ( d.map( u => new User(u))) )
    // )
  }

  getUser(id: number): Observable<Iuser> {
    // return this.http.get(`http://localhost:3000/users/${id}`) as Observable<Iuser>;
    return this.http.get('http://localhost:3000/users/' + id) as Observable<Iuser>;
  }

  getPosts(): Observable<Ipost[]> {
    return this.http.get(`${HOST}/posts`) as Observable<Ipost[]>;
  }
}
