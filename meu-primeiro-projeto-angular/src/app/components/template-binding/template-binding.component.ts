import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
public name = 'Gustavo Carvalho';
public age = 18;
public condition = this. age > 17 ? 'Teste': 'Teste2'
public isDisable = true;
public srcValue =
'https://vidafullstack.com.br/wp-content/uploads/2021/03/angular.jpg'

public isTextDecoration = this.age >= 18 ? 'underline' : 'none';

public sum(){
  return this.age++;
}

public sub(){
  return this.age--;
}

public onKeyDown(event: Event){
  return console.log(event)
}

public onMouseMove(event: any){
  return console.log(event)
}
}
