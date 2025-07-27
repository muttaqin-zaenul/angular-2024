import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usia'
})
export class UsiaPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let toDay = new Date();
    let birthDate = new Date(value);

    let tahun = toDay.getFullYear() - birthDate.getFullYear();
    let bulan = toDay.getMonth() - birthDate.getMonth();
    let hari = toDay.getDate() - birthDate.getDate();
    return `Usia ${tahun} tahun ${bulan} bulan ${hari} hari`;
  }

}
