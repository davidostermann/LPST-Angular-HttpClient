import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
// import { ContentComponent } from './content/content.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    component: UserListComponent,
    path: 'users',
    children:  [
      { path: ':id', component: UserDetailComponent }
    ]
  },
  { component: PostListComponent,
    path: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {}
