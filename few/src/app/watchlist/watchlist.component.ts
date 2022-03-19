import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sd/sc.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private service : ServiceService) { }
  email?: string;
  resp?: any;
  err?: any;
  showMsgDiv: boolean = false;
  list?: string[];
  
  ngOnInit(): void {
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

}
