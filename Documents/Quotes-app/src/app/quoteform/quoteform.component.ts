import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  public newQuote = new Quotes(0, '', 0, 0,'','',);
  @Output() addQuote = new EventEmitter<Quotes>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, '', 0, 0,'','',);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
