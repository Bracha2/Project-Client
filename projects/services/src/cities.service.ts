import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private URL: string = 'https://localhost:7075'

  constructor(private _http: HttpClient) {
  }
  getCities(cityName: string): Observable<any> {
    return this._http.get(`${this.URL}/WeatherForecast?city:${cityName}`);
  }
  getWeatherByCity(key: number): Observable<any> {
    return this._http.get<any>(`${this.URL}WeatherByCity?key:${key}`)
  }

}
