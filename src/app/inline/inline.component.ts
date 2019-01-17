import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<h2> Ini contoh template inline</h2>`,
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
