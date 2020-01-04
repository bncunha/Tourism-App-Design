import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-corner-button',
  templateUrl: './corner-button.component.html',
  styleUrls: ['./corner-button.component.scss']
})
export class CornerButtonComponent implements OnInit {
  @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-left';
  @Input() color: 'secondary' | 'primary' = 'primary';
  @Input() size: 'big' | 'small' | 'default' = 'default';
  constructor() { }

  ngOnInit() {
  }

}
