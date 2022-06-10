import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherItemsService } from '../services/weather-items.service';
import { weatherItems } from './weatherInterface';
import { WeatherItem } from './weatherInterface';
import { WEATHER_ITEMS } from '../init-weather';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  providers: [WeatherItemsService]
})

export class WeatherSearchComponent implements OnInit {
  city!:string;
  public location = new FormControl();
  private searchStream = new Subject<string>();
  data: any ;

  locationGroup = new FormGroup({
    location: new FormControl()
  })

  

  constructor(private weatherItemsService$: WeatherItemsService) { }


  ngOnInit(){
    this.searchStream.pipe(debounceTime(700))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((input: string) => this.weatherItemsService$.searchWeatherData(input)))
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        return this.data;
        });
        this.getMeteo()
  }
   onSubmit(e: Event, form: FormGroup) {
    this.weatherItemsService$.searchWeatherData(form.value.location).subscribe(
      data => {
        const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
        this.weatherItemsService$.addItem(weatherItem);
      }
    );
    form.reset();
    this.data !== '' ? this.data = {} : this.data;
  }
   getMeteo() {
    this.weatherItemsService$.searchWeatherData(this.city).subscribe(
      data => {
        const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
        this.weatherItemsService$.addItem(weatherItem);
      }
    );
    this.data !== '' ? this.data = {} : this.data;
  }

   onSearchLocation(event: Event, cityName: string) {
    if (cityName.length > 0) {
      this.searchStream.next(cityName);
    }
  }

  public clearWeatherData() {
    this.weatherItemsService$.clearWeatherItems();
  }

 
}