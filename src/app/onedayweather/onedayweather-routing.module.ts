import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnedayweatherComponent } from "./onedayweather.component";

const routes: Routes = [
  { path: 'onedayweather', component: OnedayweatherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnedayweatherRoutingModule { }
