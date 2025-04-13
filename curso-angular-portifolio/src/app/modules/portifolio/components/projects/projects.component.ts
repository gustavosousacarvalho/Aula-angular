import { Component, inject, signal } from '@angular/core';
// Interface
import { IProjects } from '../../../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
// Dialog
import { DialogProjectsComponent } from '../../../components/dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)


public arrayProjects = signal <IProjects[]> ([
  {
    src:'assets/img/vidastack.png',
    alt: 'Projeto Vida FullStack',
    title: 'Vida FullStack',
    width:'100px',
    height:'51px',
    description: " <p>Explore o fascinate mundo do desenvolvimento web no meu blog </p> ",
    links: [
      {
        name: 'Conheça o Blog',
        href: 'https://vidafullstack.com.br',
      },
    ],

  },
]);


public openDialog(data: IProjects){
  this.#dialog.open(DialogProjectsComponent, {
    data,
    panelClass: EDialogPanelClass.PROJECTS
  })
}
}
