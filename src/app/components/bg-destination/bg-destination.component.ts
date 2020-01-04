import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-destination',
  templateUrl: './bg-destination.component.html',
  styleUrls: ['./bg-destination.component.css']
})
export class BgDestinationComponent implements OnInit {
  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
