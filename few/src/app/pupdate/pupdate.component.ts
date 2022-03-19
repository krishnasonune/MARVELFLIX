import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../sd/sc.service';

@Component({
  selector: 'app-pupdate',
  templateUrl: './pupdate.component.html',
  styleUrls: ['./pupdate.component.css']
})
export class PupdateComponent implements OnInit {

  resp?: string;
  err?: string;
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {

    this.service.submit1(form.value.email, form.value.password2 ).subscribe(


      resp => {
        this.resp = resp;

        alert(this.resp);
        



      },

      error => {
        this.err = error;
        console.log(this.err);
      },

      () => console.log("method executed")
    )
  }

}
