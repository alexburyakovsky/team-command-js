import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
  	MatCardModule,
  	MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
