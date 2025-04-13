import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponet } from '../../new-componet/new-componet.component';

@Component({
  selector: 'app-templete-variables',
  standalone: true,
  imports: [CommonModule, NewComponet],
  templateUrl: './templete-variables.component.html',
  styleUrl: './templete-variables.component.scss',
})
export class TempleteVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;

  @ViewChild(NewComponet) public childComponet!: NewComponet
  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.interText);
    console.log(this.childComponet.name)
  }
}
