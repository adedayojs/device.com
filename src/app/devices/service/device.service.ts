import { Injectable } from '@angular/core';
import { IDevice } from 'src/app/core/models/device.model';
import { mockRequest } from 'src/app/core/utils/mockHttpRequest';
import { devices } from '../mock/devices.mock';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor() {}

  fetchAllDevices() {
    return mockRequest<Array<IDevice>>(devices);
  }
}
