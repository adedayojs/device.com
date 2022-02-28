import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { IDevice } from 'src/app/core/models/device.model';
import { mockRequest } from 'src/app/core/utils/mockHttpRequest';
import { searchDeviceById } from 'src/app/core/utils/searchDevice';
import { devices } from '../mock/devices.mock';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor() {}

  fetchAllDevices() {
    return mockRequest<Array<IDevice>>(devices);
  }

  fetchDeviceById(id: number) {
    const device = searchDeviceById(id, devices);
    if (device) {
      return mockRequest<IDevice>(device);
    }
    return throwError(new Error('Error Fetching Data'));
  }
}
