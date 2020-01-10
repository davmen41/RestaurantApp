import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'user-key': environment.zomatoKey
  })
}

const LOCATION_API_URL = environment.locationApiUrl;
const LOCATION_KEY = environment.locationApiKey;

const ZOMATO_API = environment.zomatoUrl;

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) { }

  getCurrentLocation(){
    return this.http.get(LOCATION_API_URL + '?apiKey=' + LOCATION_KEY);
  }

  getRestaurants(entityId){
    return this.http.get(ZOMATO_API + 'search?entity_id=' + entityId + '&entity_type=city', httpOptions);
  }

  getCityDetails(city){
    return this.http.get(ZOMATO_API + 'locations?query=' + city, httpOptions);
  }
}