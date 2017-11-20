import { Component, OnInit } from '@angular/core';
import { HotelsService } from './common/services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private hotelsService:HotelsService) {
  }

  ngOnInit() {
    this.hotels = this.hotelsService.getHotels()
    this.currentHotel = this.hotelsService.getHotel(1)
  }

  public hotels: Hotel[]
  public currentHotel: Hotel



  setCurrentHotel(id) {
    this.currentHotel = this.hotelsService.getHotel(id)
  }

  show() {
    console.log(this.currentHotel)
  }
}
