import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tourism-APP-Design';

  selected: any;
  destinations = [
    {
      name: 'Lac Blanc',
      image: '/assets/lac-blanc.jpg',
      temperature: 9,
      price: 945,
      distance: 15,
    }
  ]

  ngOnInit() {
    this.selected = this.destinations[0]
  }
}
