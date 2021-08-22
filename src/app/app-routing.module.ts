import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstPlaceComponent} from "./components/main/components/first-place/first-place.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: 'home' , component:MainComponent},
  {path: '' , component:MainComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
     RouterModule
  ]
})
export class AppRoutingModule { }
