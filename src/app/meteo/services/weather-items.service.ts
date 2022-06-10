import { Injectable } from '@angular/core';
import { Init } from '../init-weather';
// import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { weatherItems } from '../weather/weatherInterface';
import { WeatherItem } from '../weather/weatherInterface';
import { WEATHER_ITEMS } from '../init-weather';

//import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherItemsService extends Init {
  private APPID: string;
  private API_URL: string;

  constructor(private _http: HttpClient) {
    super()
    console.log('Weather Items Service Init...');
    this.load();
    this.APPID = '2e7e1d8fabd7c153330e11d1f13782d9';
    this.API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }

  public getWeatherItems() {
    const weatherItems = JSON.parse(String(localStorage.getItem('weather-items')));
    return weatherItems;
  }

  public getWeatherItem() {
    return WEATHER_ITEMS;
  }

  clearWeatherItems() {
    WEATHER_ITEMS.splice(0);
  }

  public addItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get(this.API_URL + cityName + '&APPID=' + this.APPID + '&units=metric');
  }
}