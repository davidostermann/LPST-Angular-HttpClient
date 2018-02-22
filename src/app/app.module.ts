import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { MatModule } from './/core/mat.module';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { ApiService } from './core/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './core/user.service';
import { FormsModule } from '@angular/forms';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './core/post.service';
import { PostFormComponent } from './post-detail/post-form/post-form.component';
import { Page404Component } from './page404/page404.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
    UserDetailComponent,
    UserFormComponent,
    UserPostsComponent,
    PostDetailComponent,
    PostFormComponent,
    Page404Component,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    MatModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [DialogDeleteComponent],
  providers: [ApiService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
