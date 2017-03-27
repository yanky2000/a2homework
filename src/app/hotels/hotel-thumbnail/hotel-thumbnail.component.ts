import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-thumbnail',
  templateUrl: './hotel-thumbnail.component.html',
  styleUrls: ['./hotel-thumbnail.component.css']
})

export class HotelThumbnailComponent {

  @Input() 
  public hotel:Hotel
  
  @Input() 
  public isOdd:boolean

}
