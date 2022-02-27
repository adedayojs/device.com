import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import {
  DeviceDetailComponent,
  DevicesHomeComponent,
  DeviceComponent,
} from './components/index'; // Since all our components are being tracked in the index.ts file we are importing it from here and not from the component file itself

const routes: Routes = [
  {
    path: '',
    component: DeviceComponent,
    children: [
      { path: ':id', component: DeviceDetailComponent },
      { path: '', component: DevicesHomeComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesRoutingModule {}
