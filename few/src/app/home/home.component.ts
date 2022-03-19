
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../sd/sc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resp?: string;
  err?: string;
  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {

    this.service.add(form.value.name, form.value.email, form.value.password).subscribe(

      response => {

        this.resp = response;
        if (this.resp) {
          alert(this.resp);
          this.route.navigate(['/login'])
        }


      },

      error => {
        this.err = error;
        console.log(this.err);
      },

      () => console.log('method executed success')
    )

  }

}
