import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta2.html',
  styleUrl: './pregunta2.css',
})
export class Pregunta2 {

  nombre: string = '';
  correo: string = '';
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  categoria: string = '';

  procesar(): void {

    this.imc = this.peso / (this.altura * this.altura);

    this.Observacion();
  }

  Observacion(): void {

    if (this.imc < 18.5) {

      this.categoria = 'Bajo peso';

    } else if (this.imc >= 18.5 && this.imc <= 24.9) {

      this.categoria = 'Peso saludable';

    } else if (this.imc > 24.9 && this.imc <= 29.9) {

      this.categoria = 'Sobrepeso';

    } else {

      this.categoria = 'Obesidad';
    }
  }
}