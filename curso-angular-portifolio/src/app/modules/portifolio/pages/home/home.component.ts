import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// components
import { HeaderComponent } from '../../components/header/header.component';
import { ExpericiencesComponent } from '../../components/expericiences/expericiences.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProjectsComponent, KnowledgeComponent, ExpericiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
