import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceService } from '../sd/sc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resp?: string;
  err?: string;
  constructor(private service: ServiceService, private route: Router) { }


  submit(form: NgForm) {
    this.service.submit(form.value.email, form.value.password).subscribe(


      resp => {
        this.resp = resp;
       
        if (this.resp != "user not found") {
          
          sessionStorage.setItem("user", this.resp);
          this.route.navigate(['/view'])
        } else {
          alert('wrong password');
        }
       
       

      },

      error => {
        this.err = error;
        console.log(this.err);
      },

      () => console.log("method executed")
    )
  }


  ngOnInit(): void {
  }

}
