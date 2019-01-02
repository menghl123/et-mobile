import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  quanStyle = {
    'margin-left': '12px',
    padding: '0 3px',
    'background-color': '#f19736',
    'border-radius': '2px'
  };
  newStyle = {
    'margin-left': '12px',
    padding: '0 3px',
    'background-color': '#21b68a',
    'border-radius': '2px'
  };
  autopayStyle = {
    'margin-left': '12px',
    padding: '0 3px',
    'background-color': '#fff',
    'border-radius': '2px',
    color: '#f19736',
    border: '1px solid #f19736'
  };

  constructor() { }

  ngOnInit() {
  }

}
