import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { Iuser } from '../core/iuser';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: Iuser;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.user = this.userService.selectedUser;
    this.userService.userReady$.subscribe(u => (this.user = u));
  }

  onSubmit() {
    this.userService.update().subscribe(user => {
      this.snackBar.open('Updated user 🍕 !', 'Couicou', {
        duration: 500
      });
      // this.router.navigate(['/users', this.user.id]);
      setTimeout(() => {
        this.router.navigate(['../'], { relativeTo: this.route });
      }, 1000);
    });
  }
}
