import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  onClick() {
    console.log("Button has been Clicked");
  }

  onMouseOver() {
    console.log('Mouse over the button');
  }

  onMouseOut() {
    console.log('Mouse out the button');
  }

  onFocus() {
    console.log('Mouse sedang fokus ');
  }

  onBlur() {
    console.log('Mouse is being Bluring ');
  }

  onKeyDown() {
    console.log('Keyboard sedang ditekan');
  }

  ngOnInit() {
  }

}
