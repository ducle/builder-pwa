import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removesrc'
})
export class RemovesrcPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value
      .replace(' ', '')
      .replace('\"', '')
      .replace('"', '')
      .replace('src=', '');
  }
}
