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
  @Input() arrCities: {key:number, city:string}[]=[]
  cityElemnt: any
  cityName!: string
  temperature!: number
  WeatherText!: string
  selctedCity!: {key:number,city:string}|undefined

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
  theCity(index: number) {
    if (this.cityElemnt)
      this.cityElemnt.style.border = "";
    this.cityElemnt = document.getElementById(`__title__${index}`)
    this.cityElemnt.style.border = "solid 2px brown ";
    this.selctedCity = this.arrCities.find(c=>c.key==index)
    if(this.selctedCity){
    this._favoritesService.saveCityKey(this.selctedCity?.key);
    this._citiesService.getWeatherByCity(this.selctedCity?.key)
      .subscribe(weather => {
      this.WeatherText=weather.Weather
      this.temperature=weather.Temperature
      });
    this.cityName = this.selctedCity.city
    }
  }

}
