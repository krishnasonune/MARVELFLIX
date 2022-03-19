import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExchService } from '../dataexchange/exch.service';
import { ServiceService } from '../sd/sc.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private service: ServiceService, private route: Router, private data: ExchService) { }
  hresp?: string;
  loresp?: string;
  wfresp?: string;
  err?: string;
  e1?: any;
  email?: string;
  wiroresp?: string;

  wha() {
    var x = 'whatif'

    this.data.setData(x);




    this.route.navigate(['/cd'])
  }

  feature() {
    var x = "this series will available soon !! till then enjoy other shows"
    alert(x);
  }

  wifinfo() {
    this.service.info('whatif').subscribe(

      resp => {
        this.wfresp = resp;

        alert(this.wfresp);
      },

      err => {
        this.err = err;
        console.log(this.err);
      },
      () => console.log("method executed")
    )
  }

  loinfo() {
    this.service.info('loki').subscribe(

      resp => {
        this.loresp = resp;
        alert(this.loresp);
      },

      err => {
        this.err = err;
        console.log(this.err);
      },
      () => console.log("method executed")
    )
  }
  hawinfo() {
    this.service.info('hawkeye').subscribe(

      resp => {
        this.hresp = resp;
        alert(this.hresp);

      },

      err => {
        this.err = err;
        console.log(this.err);
      },
      () => console.log("method executed")
    )
  }

  loki() {
    var x = 'loki'

    this.data.setData(x);




    this.route.navigate(['/cd'])
  }

  haw() {
    var x = 'hawkeye'

    this.data.setData(x);




    this.route.navigate(['/cd'])
  }

  whalis() {
    this.email = String(sessionStorage.getItem('user'));
    this.service.addwlis(this.email, 'what if..?').subscribe(
      res => {
        this.wiroresp = res;
        alert(this.wiroresp);
      }
    )
  }

  lolis() {
    this.email = String(sessionStorage.getItem('user'));
    this.service.addwlis(this.email, 'loki').subscribe(
      res => {
        this.wiroresp = res;
        alert(this.wiroresp);
      }
    )
  }

  hawlis() {
    this.email = String(sessionStorage.getItem('user'));
    this.service.addwlis(this.email, 'hawkeye').subscribe(
      res => {
        this.wiroresp = res;
        alert(this.wiroresp);
      }
    )
  }

  ngOnInit(): void {
    

    

    



  }

}
