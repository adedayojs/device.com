import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NotFoundComponent, SearchComponent],
  exports: [NotFoundComponent, SearchComponent],
  imports: [CommonModule, MatIconModule],
})
export class SharedModule {}
