import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import {HttpClient} from '@angular/common/http'


const LOCATION_API_URL = environment.locationApiUrl;
const LOCATION_KEY = environment.locationApiKey;

const ZOMATO_API = environment.zomatoUrl;
const ZOMATO_API_KEY = environment.zomatoKey;

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) { }

  getCurrentLocation(){
    return this.http.get(LOCATION_API_URL + '?apiKey=' + LOCATION_KEY);
  }

  getRestaurants(latitude, longitude){
    return this.http.get(ZOMATO_API);
  }
}