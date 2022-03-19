import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ExchService } from '../dataexchange/exch.service';

import { ServiceService } from '../sd/sc.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  iro: string = 'iron man';
  spi: string = 'spiderman';
  shng: string = 'shangchi';
  
  


  constructor(public service: ServiceService, private route: Router, private data: ExchService) {
    
  }
  
  

  email?: any;

  iresp?: string;
  err?: string;
  spiresp?: string;
  spierr?: string;
  shnresp?: string;
  shnerr?: string;

  wiroresp?: string;
  
  r?: string;

  
 

  

  ironer() {
     
    var x = ((document.getElementById('myBtn') as HTMLInputElement).value);
    
    this.data.setData(x);
    this.route.navigate(['/cd'])
  }

  ironmovie() {

    var x = 'iron man'

    this.data.setData(x);
    this.route.navigate(['/movieplayer'])
  }

  irolis() {
    this.email = String(sessionStorage.getItem('user'));
    this.service.addwlis(this.email, this.iro).subscribe(
      res => {
        this.wiroresp = res;
        alert(this.wiroresp);
      }
    )
  }


  ironinfo() {
    this.service.info(this.iro).subscribe(

      resp => {
        this.iresp = resp;
        alert(this.iresp);
        console.log(this.iresp);
      },

      err => {
        this.err = err;
        console.log(this.err);
      },
      () => console.log("method executed")
    )

  }
 

  spiderer() {
    var x = 'spiderman'

    this.data.setData(x);




    this.route.navigate(['/cd'])
  }

  spilis() {
    this.email = String(sessionStorage.getItem('user'));

    this.service.addwlis(this.email, this.spi).subscribe(
      res => {
        this.wiroresp = res;
        alert(this.wiroresp);
      }
    )
  }

  spiinfo() {
    this.service.info(this.spi).subscribe(

      resp => {
        this.spiresp = resp;
        alert(this.spiresp);

        console.log(this.spiresp);
      },

      err => {
        this.spierr = err;
        console.log(this.spierr);
      },
      () => console.log("method executed")
    )
  }

  spidermovie() {

    var x = 'spiderman'

    this.data.setData(x);
    this.route.navigate(['/movieplayer'])
  }

  shn() {
    this.service.info(this.shng).subscribe(

      resp => {
        this.shnresp = resp;
        alert(this.shnresp);
        console.log(this.shnresp);

      },

      err => {
        this.shnerr = err;
        console.log(this.shnerr);
      },
      () => console.log("method executed")
    )
  }

  shanger() {
    var x = 'shangchi'

    this.data.setData(x);
    this.route.navigate(['/cd'])
  }

  shnlis() {
    this.email = String(sessionStorage.getItem('user'));

    this.service.addwlis(this.email, this.shng).subscribe(
      res => {
        this.wiroresp = res;
        alert(this.wiroresp);
      }
    )
  }

  shangmovie() {

    var x = 'shangchi'

    this.data.setData(x);
    this.route.navigate(['/movieplayer'])
  }
 

  ngOnInit(): void {
    


    
   

    this.service.info(this.shng).subscribe(

      resp => {
        this.shnresp = resp;
        console.log(this.shnresp);
        
      },

      err => {
        this.shnerr = err;
        console.log(this.shnerr);
      },
      () => console.log("method executed")
    )

  }
      

    
     
  
  

}
