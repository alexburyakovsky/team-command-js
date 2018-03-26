import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module'
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [PrimaryButtonComponent],
  exports: [PrimaryButtonComponent]
})
export class SharedModule { }
