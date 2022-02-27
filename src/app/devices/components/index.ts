import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DevicesHomeComponent } from './devices-home/devices-home.component';

export const components = [DevicesHomeComponent, DeviceDetailComponent];
export * from './device-detail/device-detail.component';
export * from './devices-home/devices-home.component';

// This index File is created and structure in this way because we are assuming that the components in this module will grow larger. We are also assuming that
// Some developers might not be using the angular cli tool to create new components and might be doing so manually, Therefore it is not automatically added to the module file.
