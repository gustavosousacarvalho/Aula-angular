import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-components.component.html',
  styleUrl: './signals-components.component.scss'
})
export class SignalsComponents {
public firstName = signal('Gustavo ')
public lastName = signal('Carvalho')

public fullName = computed( () => {
  return this.firstName() + this.lastName()
})

public array = signal([1]);

/*
effect - raramente são necessários na maioria dos códigos,
mas podem ser úteis em circunstâcias específicas.
- Resgistro de dados sendo exibidos e quando eles mudam, seja para ánalise
ou como ferramenta de depuração.

- Manter os dados sincronizados com o window.localStorage.

- Adicionando comportamento DOM personalizado que não pode ser expresso com
síntaxe de modelo.

- Executar renderização personalizada em um <canvas>, biblioteca de gráfiocos
ou outra biblioteca de UI de terceiros.

*/



constructor(){
effect(() => {
  console.log(this.firstName())
  console.log(this.array())
})
}

public updateName(){
return this.firstName.set("Arkin ")
}

public updateArray(){
this.array.update( (oldValue: Array<number>) => {
return [...oldValue, oldValue.length + 1]
})
}
}
