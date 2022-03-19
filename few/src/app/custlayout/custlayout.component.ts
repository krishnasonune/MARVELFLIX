import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-custlayout',
  templateUrl: './custlayout.component.html',
  styleUrls: ['./custlayout.component.css']
})
export class CustlayoutComponent implements OnInit {

  constructor(private rou: Router, public load: LoaderService) { }

  logout() {
    sessionStorage.removeItem('user');
    this.rou.navigate(['/home'])
  }

  ngOnInit(): void {
  }

}
