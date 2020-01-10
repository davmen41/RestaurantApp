import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  city:any;
  restaurantList: any;
  
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getCityDetails("Dallas")
      .subscribe(data => {
        console.log(data);
        this.city = data;
        this.getRestaurants(this.city.location_suggestions[0]);
      })
  }

  getRestaurants(city){
    this.restaurantService.getRestaurants(city.entity_id)
    .subscribe(data => {
      console.log(data)
      this.restaurantList = data
    })
  }

}
