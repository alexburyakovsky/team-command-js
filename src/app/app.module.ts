import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { OnedayweatherComponent } from './onedayweather/onedayweather.component';
import { FivedaysweatherComponent } from './fivedaysweather/fivedaysweather.component';
import { TendaysweatherComponent } from './tendaysweather/tendaysweather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    SearchComponent,
    NavComponent,
    OnedayweatherComponent,
    FivedaysweatherComponent,
    TendaysweatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
