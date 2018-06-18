import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? 0 + minutes : minutes;
    const strTime = twoDigit(hours) + ':' + twoDigit(minutes) + ' ' + ampm;
    const locale = 'en-us';
    const month = date.toLocaleString(locale, { month: 'long' });
    const dateName = date.toLocaleString(locale, { weekday: 'short' });
    return dateName + ', ' + month + ' ' + date.getDate() + ' AT ' + strTime;
  }
}
function twoDigit(number: number) {
  return number > 9 ? '' + number : '0' + number;
}
