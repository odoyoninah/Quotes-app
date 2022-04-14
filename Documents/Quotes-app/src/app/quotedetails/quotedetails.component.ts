import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quotes!: Quotes;
  quote!: Quotes;
  @Output() deleteQuote = new EventEmitter<Quotes>();
  // upvotes: number = 0;
  // downvotes:number = 0;
  
  upvote(){
    this.quotes.upvotes++;
    
  }
  

  downvote(){
    this.quotes.downvotes++;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
