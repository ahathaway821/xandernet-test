import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';
import { PieChartModule } from '@swimlane/ngx-charts';

const modules = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  PieChartModule,
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
  declarations: [],
})
export class SharedModule { }
