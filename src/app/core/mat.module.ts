import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class MatModule {}
