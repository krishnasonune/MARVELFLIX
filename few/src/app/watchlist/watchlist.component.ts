import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchService } from '../dataexchange/exch.service';
import { ServiceService } from '../sd/sc.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private service : ServiceService, private route : Router, private data: ExchService) { }
  email?: string;
  resp?: any;
  err?: any;
  showMsgDiv: boolean = false;
  list?: string[];

  remove(r : string){
    this.email = String(sessionStorage.getItem('user'))
    this.service.removewlis(r, this.email).subscribe(
      y => {
        this.getlis();
      },

      err => {
        console.log(err);
      }
    )
  }
  
  getlis(){
    this.email = String(sessionStorage.getItem('user'));
    
    this.service.getwlis(this.email).subscribe(

      resp => {
        this.resp = resp;
        if(this.resp == null) {
          this.showMsgDiv = true;
        }
        else {
          
          this.list = this.resp;
        }
        
      },
      err => {
        this.err = err;
      }
    )
  }

  watch(r : string){
    this.data.setData(r);
    this.route.navigate(['/movieplayer'])
  }

  ngOnInit(): void {
    this.getlis();
  }

}
