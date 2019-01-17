import { Component, OnInit, DoCheck, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  constructor() { }

  ngAfterViewInit() {
    console.log('AfterViewinit diapnggil');
  }

  ngDoCheck() {
    console.log('DoCheck dipanggil');
  }

  ngOnInit() {
    console.log('OnInit dipanggil');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy dipanggil');
  }

}
