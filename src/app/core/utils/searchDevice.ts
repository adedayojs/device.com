import { IDevice } from '../models/device.model';

export function searchDeviceById(id: number, devices: Array<IDevice>) {
  return devices.find((device) => device.id === id);
}
