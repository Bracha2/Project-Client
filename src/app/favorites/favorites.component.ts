import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FavoritesService } from 'projects/services/src/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnChanges {
  @Input() cityName! :string
  favorites = "add to Favorites"
  noFavorites = "remove from Favorites"
  sentense='' 

  constructor(private _favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this._favoritesService.checkFavorite().subscribe(res => {
      if (res)
        this.sentense = this.noFavorites
      else
        this.sentense = this.favorites
    })
  }
  addOrRemove() {
    if (this.sentense.startsWith("add"))
      this.addToFavorites()
    else
      this.removeToFavorites()
  }

  addToFavorites() {
    this._favoritesService.takeCityKey();
    this._favoritesService.add(this.cityName).subscribe(res => {
      this.sentense = this.noFavorites
    });
  };

  removeToFavorites() {
    this._favoritesService.takeCityKey();
    this._favoritesService.remove(this.cityName).subscribe(res => {
      this.sentense = this.favorites
    });
  }

}
