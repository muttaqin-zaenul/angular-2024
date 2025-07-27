import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersiswa'
})
export class FiltersiswaPipe implements PipeTransform {

  transform(value: {'nama': string, 'kelas': string}[], ...args: unknown[]): {'nama': string, 'kelas': string}[] {
    let namaCari = args[0] as string;
    return value.filter((item: any) => {
      return item["nama"].toLowerCase().includes(namaCari.toLowerCase());
    });
}

}
