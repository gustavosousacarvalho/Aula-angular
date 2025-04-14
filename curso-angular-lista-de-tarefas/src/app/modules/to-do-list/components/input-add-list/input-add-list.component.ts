import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, output, ViewChild } from '@angular/core';

// Interface
import { IListItems } from '../../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-list',
  imports: [],
  templateUrl: './input-add-list.component.html',
  styleUrl: './input-add-list.component.scss'
})
export class InputAddListComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;
  @Output() public outputListItens = new EventEmitter<IListItems>()
  public focusAndAddItem(value: string){
    if(value){
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const dataAtual = new Date();
      const timeStamp = dataAtual.getTime();
      const id = `ID ${timeStamp}`

      this.outputListItens.emit({
        id,
        checked: false,
        value,
      });
      return this.inputText.nativeElement.focus();

    }
  }
}
