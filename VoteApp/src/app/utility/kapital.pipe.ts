import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kapital'
})
export class KapitalPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }

}
