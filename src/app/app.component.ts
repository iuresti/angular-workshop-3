import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public changeDetectorRef: ChangeDetectorRef) {

  }

  title = 'pipes';
  name = 'Murcielago';
  name2 = 'Ivan ISRael UReSti ADaME';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI * 1000;
  a = 0.234;
  salario = 1234.5;
  hero = {
    nombre: 'Logan',
    clave: 'Wolverine',
    team: 'xmen',
    hability: [
      'Curarse',
      'Agilidad'
    ]
  };

  fecha = new Date();

}
