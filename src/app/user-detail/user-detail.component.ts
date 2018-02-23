import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../core/iuser';
import { UserService } from '../core/user.service';
import { MatDialog } from '@angular/material';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

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

  openDeleteDialog(e: MouseEvent): void {
    e.preventDefault();
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed : ', result);
      if (result) {
        this.deleteUser();
      }
    });
  }

  deleteUser() {
    this.userService.delete(this.user.id).subscribe(
      () => {
        this.router.navigate(['../'], {
          relativeTo: this.route
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
