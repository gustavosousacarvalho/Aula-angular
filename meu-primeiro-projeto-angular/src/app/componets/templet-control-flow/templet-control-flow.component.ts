import { AsyncPipe, CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-templet-control-flow',
  standalone: true,
  imports: [AsyncPipe,CommonModule,NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './templet-control-flow.component.html',
  styleUrl: './templet-control-flow.component.scss'
})
export class TempletControlFlowComponent {
public isTrue = true;
public switchCondition = 'C';
public itens: Array <{name: string}> = [{ name: 'Gustavo Carvalho'}];
public loadingData$: Observable<string[]> = of([
  "item 1",
  "item 2",
  "item 3",
]).pipe(delay(3000));

public trackByFn(index: number){
  return index;
}

public addNewName(value : string){
  return this.itens.push({name : value})
}

}
