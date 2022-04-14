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
    new Quotes(1, 'Do what makes you happy','coco','vimeo',new Date(2019,3,14)),
    new Quotes(2, 'It is what it is','Odos','Passh',new Date(2019,8,14)),
     new Quotes(31, 'Keep going','Este','Estero',new Date(2019,7,14)),
    
  ]
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote);
  }

  highestVotes:Quotes = new Quotes(0, '', '', '', new Date());

  upvote(index:number){
    this.quotes[index].upvotes++;
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].upvotes > this.highestVotes.upvotes){
        this.highestVotes = this.quotes[i];
      }
    }
    // if(this.quotes[index].upvotes > this.highestVotes.upvotes){
    //   this.highestVotes = this.quotes[index];
    
  }

  downvote(index:number){
    this.quotes[index].downvotes++;
  }
    
  arr: number[] = this.quotes.map(quote => quote.upvotes)
  highest = Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
