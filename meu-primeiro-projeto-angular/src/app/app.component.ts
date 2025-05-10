import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponet } from './componets/new-componet/new-componet.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TempleteVariablesComponent } from './componets/template/templete-variables/templete-variables.component';
import { TempletControlFlowComponent } from './componets/templet-control-flow/templet-control-flow.component';
import { TemplateDeferrableViewsComponent } from './componets/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponents } from './componets/signals-components/signals-components.component';
import { PaiOuMaeComponent } from './componets/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './componets/pipes/angular-pipes/angular-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponet,
    TemplateBindingComponent,
    TempleteVariablesComponent,
    TempletControlFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponents,
    PaiOuMaeComponent,
    AngularPipesComponent,
  ],

  template: `
    <!-- <router-outlet></router-outlet> -->
    <!--  <app-new-componet />  -->
    <!--  <app-template-binding /> -->
    <!-- <app-templete-variables /> -->
    <!-- <app-templet-control-flow /> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals /> -->
    <!-- <app-pai-ou-mae />  -->
   <!--  <app-angular-pipes /> --> 


    <h1>Curso de Angular</h1>
    <h2>Template-drive forms </h2>
    h
  


  `,
})
export class AppComponent {}
