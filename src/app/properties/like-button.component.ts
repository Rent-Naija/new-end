import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./property.css']
})
export class LikeButtonComponent implements OnInit {
@Input() favtotal: number;
  constructor() { }

  ngOnInit() {
  }

}
