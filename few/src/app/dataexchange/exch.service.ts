import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../sd/sc.service';

@Injectable({
  providedIn: 'root'
})
export class ExchService {

  constructor(private service: ServiceService, private route: Router) { }

  private data = '';

  setData(data: string) {
    this.data = data;
  }

  getData() {
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = 'undefined';
  }

}
