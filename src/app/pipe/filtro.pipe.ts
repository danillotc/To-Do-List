import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(value: any, input: any): any {
    if (input) {
      return value.filter(val => val.indexOf(input) >= 0);
    } else {
      return value;
    }
  }
}

@Pipe({
  name: 'filtrarData'
})
export class DateFiltro{
  transform(value: any): any {
      return `${value.split('-')[2]}/${value.split('-')[1]}/${value.split('-')[0]}`;
    }
}