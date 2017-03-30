import { Injectable } from '@angular/core';

@Injectable()
export class LeisureService {

  constructor() { }

  getLeisureTypes() {
    return LEISURES
  }
}


  const LEISURES:string[] = [
    "Culture",
    "Beach",
    "Shopping",
    "Sport"
  ]
