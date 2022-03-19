import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-common-lay',
  templateUrl: './common-lay.component.html',
  styleUrls: ['./common-lay.component.css']
})
export class CommonLayComponent implements OnInit {

  constructor(public load: LoaderService) { }

  ngOnInit(): void {
  }

}
