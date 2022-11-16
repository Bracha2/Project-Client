import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities.component';
import { FavoritesModule } from '../favorites/favorites.module';



@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    FavoritesModule
  ],
  exports: [CitiesComponent]
})
export class CitiesModule { }
