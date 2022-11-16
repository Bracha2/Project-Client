import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FavoritesService } from 'projects/services/src/favorites.service';
import { CitiesService } from 'projects/services/src/public-api';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit, OnChanges {
  @Input() arrCities: string[]=[]
  @Input() arrkey: number[]=[]
  cityElemnt: any
  cityName!: string
  temperature!: number
  WeatherText!: string
  keyCity!: number

  constructor(private _citiesService: CitiesService, private _favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    if (this.arrCities.length === 0) {
      this.cityName = ''
      this.temperature = 0
      this.WeatherText = ''
    }
  }
  theCity(city: string, index: number) {
    if (this.cityElemnt)
      this.cityElemnt.style.border = "";
    this.cityElemnt = document.getElementById(`__title__${index}`)
    this.cityElemnt.style.border = "solid 2px brown ";
    this.keyCity = this.arrkey[index];
    this._favoritesService.saveCityKey(this.keyCity);
    this._citiesService.getWeatherByCity(this.arrkey[index])
      .subscribe(weather => {
      // this.WeatherText=weather.Weather
      // this.temperature=weather.Temperature
      });
    this.cityName = city
  }

}
