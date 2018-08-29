import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    value = value.toLowerCase();
    let capitalized = '';

    const names = value.split(' ');
    names.forEach((name) => {
      capitalized += (name[0].toUpperCase() + name.substr(1) + ' ');
    });

    return capitalized;
  }
}
