import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input() balance: number;
  @Output() amountChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  withdraw(){
    this.balance -= 50;
    this.amountChange.emit(this.balance)
  }
}
