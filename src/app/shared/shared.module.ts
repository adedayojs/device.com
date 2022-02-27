import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
