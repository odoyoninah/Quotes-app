import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  

  quotes: Quotes[] = [
    new Quotes(1, 'Do what makes you happy', 1, 0,'coco','vimeo'),
    new Quotes(2, 'It is what it is', 0, 0,'coco','vimeo'),
    new Quotes(3, 'Dont quit', 0, 0,'coco','vimeo'),
    new Quotes(56, 'You are enough', 0, 0,'coco','vimeo'),
    new Quotes(78, 'Lay low and boss up', 0, 0,'coco','vimeo'),
    new Quotes(31, 'Keep going', 0, 0,'coco','vimeo'),
    
  ]
  addNewQuote(quote: Quotes) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote);
  }
    
  arr: number[] = this.quotes.map(quote => quote.upvotes)
  highest = Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
