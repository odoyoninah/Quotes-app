import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { DatecountPipe } from './datecount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesComponent,
    HighlightDirective,
    QuoteformComponent,
    QuotedetailsComponent,
    DatecountPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

