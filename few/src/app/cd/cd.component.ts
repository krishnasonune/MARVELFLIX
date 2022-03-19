import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { ExchService } from '../dataexchange/exch.service';
import { ServiceService } from '../sd/sc.service';
import { ViewComponent } from '../view/view.component';


@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css']
})
export class CdComponent implements OnInit{

  

  

  @ViewChild(ViewComponent) child?: ViewComponent;
  constructor(private service: ServiceService, private datar: ExchService) { }
    
  data?: any;
  resp: any;
  err: any;
  
  
  

  ngOnInit(): void {
    this.data = this.datar.getData();
    this.service.trailer(this.data).subscribe(

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


