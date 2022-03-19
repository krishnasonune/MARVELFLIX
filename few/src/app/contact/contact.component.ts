import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  @Output() sr = new EventEmitter();
  data = 'hello sir';

  vg() {
    alert('hello');
  }

  ngOnInit(): void {
    this.sr.emit(this.data)
  }

}
