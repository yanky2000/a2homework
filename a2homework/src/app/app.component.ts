import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public hotels: Hotel[] = [
    {
      id: 1,
      name: "Milan Marriott Hotel",
      imageUrl: "../assets/images/milan_hotel2.png",
      imageUrl2: "../assets/images/r1.jpg",
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
      imageUrl: "../assets/images/barcelona_hotel.jpg",
      imageUrl2: "../assets/images/r1.jpg",
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
      imageUrl: "../assets/images/vienna_hotel.jpg",
      imageUrl2: "../assets/images/r1.jpg",
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
      imageUrl: "../assets/images/phuket_hotel.jpg",
      imageUrl2: "../assets/images/r1.jpg",
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

  public leisureTypes = [
    "Culture",
    "Beach",
    "Shopping",
    "Sport"
  ]

  public currentHotel: Hotel

  ngOnInit() {
    this.currentHotel = this.hotels[0]
  }

  setCurrentHotel(id) {
    // console.log("app comp" + id)
    this.currentHotel = this.hotels[id-1]
    // console.log(this.currentHotel.name)
  }
}
