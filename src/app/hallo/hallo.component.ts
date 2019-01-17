import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hallo',
  templateUrl: './hallo.component.html',
  styleUrls: ['./hallo.component.css']
})
export class HalloComponent implements OnInit {
  nama: string;
  usia: number;
  hobi = [];

  constructor() {
    this.nama = "Dede Herdiana";
    this.usia = 17;
    this.hobi = ["Sepak Bola", "Musik", "Gaming"];

  }

  ngOnInit() {
  }

}
