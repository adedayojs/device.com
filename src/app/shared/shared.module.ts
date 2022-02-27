import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [NotFoundComponent, SearchComponent, LoadingComponent],
  exports: [
    NotFoundComponent,
    SearchComponent,
    MatIconModule,
    LoadingComponent,
  ],
  imports: [CommonModule, MatIconModule],
})
export class SharedModule {}
