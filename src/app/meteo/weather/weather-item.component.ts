import { Component, OnInit, Input } from '@angular/core';
import { WeatherItemsService } from '../services/weather-items.service';
import { weatherItems } from './weatherInterface';
import { WeatherItem } from './weatherInterface';

@Component({
  selector: 'app-weather-item',
  template: `
  <div class="alert alert-success" role="alert" >
  <h4 class="alert-heading">{{ weatherItem.cityName }}</h4>
  <p>{{ weatherItem.description }}</p>
  <hr>
  <p class="mb-0"> {{ weatherItem.temperature }}°C</p>
</div>
  `,
  //styleUrls: ['./weather-item.css'],
})

export class WeatherItemComponent {
  @Input() weatherItems!: weatherItems[];
  @Input('item') weatherItem !: WeatherItem;
}