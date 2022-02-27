import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, DevicesRoutingModule],
})
export class DevicesModule {}
