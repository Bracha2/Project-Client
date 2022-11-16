import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesModule } from './cities/cities.module';
import { ClientModule } from './client/client.module';
import { FavoritesModule } from './favorites/favorites.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    CitiesModule,
    ClientModule,
    HttpClientModule,
    FavoritesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
