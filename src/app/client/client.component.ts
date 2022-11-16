import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { CitiesService } from 'projects/services/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  cityToSearch: string = ''
  arrOfSearch: {key:number, city:string}[] = [];
  arrkey: number[] = [];
  constructor(private _citiesService: CitiesService) {
  }

  ngOnInit() {
  }

  findCities() {
    this.arrOfSearch = []
    if (this.cityToSearch === '') return
    this._citiesService.getCities(this.cityToSearch).subscribe((cities) => {
      cities.contins.forEach((city: { key: any; LocalizedName: any; }) => {
        this.arrOfSearch.push({key:city.key,city:city.LocalizedName})
      });
    
    });
  }
}

