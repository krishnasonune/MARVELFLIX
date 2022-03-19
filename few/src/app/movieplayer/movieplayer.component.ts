import { Component, OnInit } from '@angular/core';
import { ExchService } from '../dataexchange/exch.service';
import { ServiceService } from '../sd/sc.service';

@Component({
  selector: 'app-movieplayer',
  templateUrl: './movieplayer.component.html',
  styleUrls: ['./movieplayer.component.css']
})
export class MovieplayerComponent implements OnInit {

  constructor(private service: ServiceService, private datar: ExchService) { }

  data?: any;
  resp?: any;
  err?: any;

  ngOnInit(): void {
    this.data = this.datar.getData();
    this.service.movie(this.data).subscribe(

      resp => {
        this.resp = resp;
        

      },

      err => {
        this.err = err;
        console.log(this.err);
      },
      () => console.log("method executed")
    )
  }

}
