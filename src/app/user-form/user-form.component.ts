import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { Iuser } from '../core/iuser';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: Iuser;
  editing: boolean;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(
      'isEdit : ',
      this.route.snapshot.url[this.route.snapshot.url.length - 1]
    );

    const lastFragment = this.route.snapshot.url[0];

    if (lastFragment && lastFragment.path === 'edit') {
      this.user = this.userService.selectedUser;
      this.editing = true;
    } else {
      this.editing = false;
      this.user = {
        name: '',
        image: '',
        jobTitle: '',
        position: {
          lat: '',
          lng: ''
        }
      };
    }
    /** NO NEED si tu proteges bien ton composant avec un *ngIf
     * this.userService.userReady$.subscribe(u => (this.user = u));
     */
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.editing) {
      // Garder le contexte de creation (this) à l'execution grâce au bind(this)
      this.userService.update().subscribe( this.showSnack.bind(this) );
    } else {
      // Garder le contexte de creation (this) à l'execution grâce à arrow function
      this.userService.create(this.user).subscribe( user => { this.showSnack(); });
    }
  }

  showSnack() {
    console.log(this);
    this.snackBar.open(
      `${ this.editing ? 'Updated' : 'created'} user 🍕 !`,
     'Coucou', { duration: 500 });

    this.router.navigate(['../'], { relativeTo: this.route });
    // setTimeout(() => {
    //   // https://angular.io/api/router/NavigationExtras#members
    //   this.router.navigate([''], { relativeTo: this.route });
    //   // this.router.navigate(['/users', this.user.id]);
    // }, 1000);
  }
}
