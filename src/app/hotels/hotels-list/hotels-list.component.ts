import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';

import { LeisureService } from '../../common/services/leisure.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})

export class HotelsListComponent {

  leasureToSearch:string
  

  constructor(
    private leisureSevice:LeisureService
  ) {}

  @Input()
  hotels: Hotel[]

  @Output()
  hotelClicked = new EventEmitter()

  public frontImage = `${environment.imagePath}1.jpg`
  public leisureTypes:string[] = this.leisureSevice.getLeisureTypes()

  public hotelClickedHandler(hotelId:number) {
    this.hotelClicked.emit(hotelId)
  }

  public doFilter(term):void {
    this.leasureToSearch = term
  }

}
