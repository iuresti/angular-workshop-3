import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activated: boolean = true): string {

    let transformedValue = value;

    if (activated) {
      transformedValue = '*'.repeat(value.length);
    }

    return transformedValue;
  }

}
