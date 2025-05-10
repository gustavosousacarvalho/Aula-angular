import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

// Interface
import { IListItems } from '../../../interface/IListItems.interface';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-input-add-list',
  imports: [NgClass],
  templateUrl: './input-add-list.component.html',
  styleUrl: './input-add-list.component.scss'
})
export class InputAddListComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;

  @Input({required: true}) public inputListItems: IListItems[] = [];

  @Output() public outputAddListItem = new EventEmitter<IListItems>()
  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const currentDate = new Date();
      const timeStamp = currentDate.getTime();
      const id = `ID ${timeStamp}`

      this.outputAddListItem.emit({
        id,
        checked: false,
        value,
      });
      return this.inputText.nativeElement.focus();

    }
  }
}
