import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    'new Quote'(1, 'firstquote', 0, 0),
    'new Quote'(2, 'secondquote', 0, 0),
    'new Quote'(3, 'thirdquote', 0, 0),
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
