import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';
import { User } from './user';
import { map, delay, tap } from 'rxjs/operators';
import { Itag } from './itag';

const HOST = 'http://localhost:3000';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`${HOST}/users`).pipe(delay(1000));
    // .pipe(
    //   map( (d: Iuser[]) => ( d.map( u => new User(u))) )
    // )
  }

  getUser(id: number): Observable<Iuser> {
    // return this.http.get(`http://localhost:3000/users/${id}`) as Observable<Iuser>;
    return this.http
      .get<Iuser>('http://localhost:3000/users/' + id)
      .pipe(delay(1000));
  }

  updateUser(user: Iuser): Observable<Iuser> {
    return this.http
      .put<Iuser>(`${HOST}/users/${user.id}`, user)
      .pipe(delay(1000));
  }

  createUser(user: Iuser): Observable<Iuser> {
    return this.http
      .post<Iuser>(`${HOST}/users`, user)
      ; // .pipe(delay(1000));
  }

  deleteUser(id: number): any {
    return this.http.delete<any>(`${HOST}/users/${id}`); // .pipe(delay(1000));
  }

  getPosts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(`${HOST}/posts`).pipe(delay(1000));
  }

  getPost(id: number): Observable<Ipost> {
    return this.http.get<Ipost>(`${HOST}/posts/${id}`).pipe(delay(1000));
  }

  getUserPosts(id): Observable<Ipost[]> {
    return this.http
      .get<Ipost[]>(`${HOST}/users/${id}/posts`)
      .pipe(delay(1000));
  }

  createPost(post: Ipost): Observable<Ipost> {
    return this.http.post<Ipost>(`${HOST}/posts`, post).pipe(delay(1000));
  }

  updatePost(post: Ipost): Observable<Ipost> {
    return this.http
      .put<Ipost>(`${HOST}/posts/${post.id}`, post)
      .pipe(delay(1000));
  }

  deletePost(id: number): any {
    return this.http.delete<any>(`${HOST}/posts/${id}`); // .pipe(delay(1000));
  }

  getTags(): Observable<Itag[]> {
    return this.http.get<Itag[]>(`${HOST}/tags`).pipe(delay(1000));
  }

  // getUserPosts(id: number): Observable<string[]> {
  //   return this.http
  //     .get(`${HOST}/user/${id}/posts`)
  //     .pipe(
  //       map((posts: any[]) => posts.map(p => p.title))
  //     ) as Observable<string[]>;
  // }
}
