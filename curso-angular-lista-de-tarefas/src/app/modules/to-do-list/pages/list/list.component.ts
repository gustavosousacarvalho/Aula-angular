import { Component, signal } from '@angular/core';

// Component
import { InputAddListComponent } from '../../components/input-add-list/input-add-list.component';

@Component({
  selector: 'app-list',
  imports: [InputAddListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true)
}
