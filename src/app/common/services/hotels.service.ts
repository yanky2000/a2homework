import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class HotelsService {

  constructor() { }

  getHotels() {
    return HOTELS
  }

  getHotel(id: number) {
    return HOTELS.find(hotel => hotel.id === id)
  }
}



const HOTELS: Hotel[] = [
    {
      id: 1,
      name: "Milan Marriott Hotel",
      imageUrl: `${environment.imagePath}milan_hotel2.png`,
      location: {
        address: "Via Giorgio Washington 66",
        city: "Milan",
      },
      stars: 2,
      activityType: "Shopping",
      tel: "555-555-5555",
      weather: {
        temperature: 38,
        water: 35
      },
      likes: 45,
      followers: 28
    },
    {
      id: 2,
      name: "Lolita B and B",
      imageUrl: `${environment.imagePath}barcelona_hotel.jpg`,
      stars: 4,
      location: {
        address: "Carrer Provença 181, 2-2",
        city: "Barcelona",
      },
      activityType: "Sport",
      tel: "666-666-66666",
      weather: {
        temperature: 40,
        water: 33
      },
      likes: 22,
      followers: 2
    },
    {
      id: 3,
      name: "The Ritz-Carlton",
      imageUrl: `${environment.imagePath}vienna_hotel.jpg`,
      stars: 3,
      location: {
        address: "Schubertring 5-7",
        city: "Vienna",
      },
      activityType: "Culture",
      tel: "444-4444-44444",
      weather: {
        temperature: 29,
        water: 25
      },
      likes: 122,
      followers: 228
    },
    {
      id: 4,
      name: "The Vijitt Resort Phuket",
      imageUrl: `${environment.imagePath}phuket_hotel.jpg`,
      stars: 5,
      location: {
        address: "6 Moo 2, Viset Road",
        city: "Phuket",
      },
      activityType: "Beach",
      tel: "666-556-1234",
      weather: {
        temperature: 33,
        water: 27
      },
      likes: 1,
      followers: 2
    }
  ]
