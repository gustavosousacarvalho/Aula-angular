import { Component } from '@angular/core';

@Component({
  selector: 'app-new-componet',
  standalone: true,
  imports: [],
  templateUrl: './new-componet.component.html',
  styleUrl: './new-componet.component.scss'
})
export class NewComponet {
  public name = "NewComponet"
}
