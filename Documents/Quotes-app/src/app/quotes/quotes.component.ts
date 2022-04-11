// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'firstquote', 0, 0),
    new Quotes(2, 'secondquote', 0, 0),
    new Quotes(3, 'thirdquote', 0, 0),
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
