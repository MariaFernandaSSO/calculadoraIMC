import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   nome = ''
   peso = ''
   altura = ''
   resultado = ''
  constructor() {

  }



  calcular(){
    if(this.nome !== '' && this.altura !== '' && this.peso !== ''){
      const imc = parseFloat(this.peso) / Math.pow(parseFloat(this.altura), 2) // (this.altura * this.altura)

      let msg_imc = ''

      if (imc < 18.5){
        msg_imc = ' você está abaixo do peso'
      } else if ( imc >=18.5 && imc <= 24.9){
        msg_imc = ' você está no seu peso correto'
      } else if (imc >= 25 && imc <= 29.9){
        msg_imc = ' você se encontra em sobrepeso'
      } else if (imc >=30 && imc <= 39.9){
        msg_imc = ' você se encontra em obesidade tipo I'
      } else {
        msg_imc = ' você se encontra em obesidade tipo II/ Grave'
      }

      this.resultado = this.nome + "," + msg_imc

    } else {
      alert('Preencha todos os campos para que seja feito o calculo')
    }
 }

  ngOnInit(): void {
  }

}
