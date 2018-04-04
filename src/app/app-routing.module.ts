import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnedayweatherComponent } from "./onedayweather/onedayweather.component";
import { FivedaysweatherComponent } from "./fivedaysweather/fivedaysweather.component";
import { TendaysweatherComponent } from "./tendaysweather/tendaysweather.component";

const routes: Routes = [
  { path: 'oneday', component: OnedayweatherComponent},
  { path: 'fivedays', component: FivedaysweatherComponent},
  { path: 'tendays', component: TendaysweatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
