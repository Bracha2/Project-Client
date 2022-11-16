import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private URL: string = 'https://localhost:7075/';

  cityKey!: number;
  constructor(private _http: HttpClient) {
  }

  saveCityKey(cityKey: number) {
    this.cityKey = cityKey;
  }

  takeCityKey() {
    return this.cityKey;
  }

  checkFavorite(): Observable<boolean> {
    return this._http.post<boolean>(`${this.URL}CheckFavorite`, [this.cityKey]).pipe()
  }

  add(city: string): Observable<boolean> {
    return this._http.post<boolean>(`${this.URL}SaveFavorite`, [this.cityKey,city]).pipe()
  }

  remove(city: string): Observable<boolean> {
    return this._http.post<boolean>(`${this.URL}DeleteFavorite`, [this.cityKey]).pipe()
  }
}