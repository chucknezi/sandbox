import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  balance: number = 1200;

  constructor() { }

  ngOnInit() {
  }

  deposit(){
    this.balance += 200;
  }


}
