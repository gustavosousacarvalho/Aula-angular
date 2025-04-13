import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-expericiences',
  standalone: true,
  imports: [],
  templateUrl: './expericiences.component.html',
  styleUrl: './expericiences.component.scss',
})
export class ExpericiencesComponent {
  public arrayExperiences = signal([
    {
      summary: {
        strong: 'Aulas de html5',
        p: 'Fev 2020 - set 2021',
      },
      text: 'Aprendi todo o conceito de html5, para saber como funciona a estrutura de um código dos sites.',
    },
    {
      summary: {
        strong: 'Aulas de css3',
        p: 'Fev 2020 - set 2021',
      },
      text: 'Aprendi parte do conceito de css3, para saber sobre a estilização dos sites da web.'
      ,
    },
    {
      summary: {
        strong: 'Aulas de javascript',
        p: 'Fev 2020 - set 2021',
      },
      text: 'Aprendi o conceito de javascript, para saber fazer um site rodar e criar coisa dinâmicas, jogos etc.',

    },
    {
      summary: {
        strong: 'Aulas de Angular',
        p: 'Present',
      },
      text: 'Aprendendo sobre como funciona essa ferramenta e como ela facilita na hora de codar',
    },
  ]);
}
