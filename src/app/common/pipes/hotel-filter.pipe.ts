import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})

export class HotelFilterPipe implements PipeTransform {

  transform(hotels: Hotel[], leasureToShow: string): Hotel[] {
    
    if (!leasureToShow)
      return hotels

    return hotels
      .filter((hotel: Hotel) => `${hotel.activityType}`.includes(leasureToShow));
  }

}
