import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.log(args)
    let numChar = args[0] as number;
    let textMore = args[1];
    if (!value) {
      return "";
    } else {
      return value.length > 50 ? value.substring(0, numChar) + textMore : value;
    }
  }
}
