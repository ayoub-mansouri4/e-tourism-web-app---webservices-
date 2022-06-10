import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherItemsService } from '../services/weather-items.service';
import { WeatherItem } from './weatherInterface';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  providers: [WeatherItemsService]
})

export class WeatherSearchComponent implements OnInit {
  @Input()  city!:string;
  private searchStream = new Subject<string>();
  data: any ;
  public weatherItem!:WeatherItem;
  


  

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

   getMeteo() {
    this.weatherItemsService$.searchWeatherData(this.city).subscribe(
      data => {
        this.weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
        console.log(this.weatherItem)
      }
    );
    this.data !== '' ? this.data = {} : this.data;
  }

 

 

 
}