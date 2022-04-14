import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any ): string{
    let timecount: string = '';
    let today: any = new Date();
    var difference = Math.abs(value - today)/1000;
    let days = Math.floor(difference / 86400);
    if(days > 0){
      timecount += Math.floor( days )+ ' days';
    }
    difference -= days * 86400;
    let hours = Math.floor(difference / 3600) % 24;
    if(hours > 0){
      timecount +=  Math.floor( hours )+ ' hours';
    }
    difference -= hours * 3600;
    let minutes = Math.floor(difference / 60) % 60;
    if(minutes > 0){
      timecount +=  Math.floor( minutes )+ ' minutes';
    }
    difference -= minutes * 60;
    let seconds = Math.floor(difference % 60);
    if(seconds > 0){
      timecount +=  Math.floor( seconds )+ ' seconds';
    }
    return timecount;

    
  }

}
