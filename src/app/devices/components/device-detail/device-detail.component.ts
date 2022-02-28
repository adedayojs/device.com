import { Component, OnInit } from '@angular/core';
import { IDevice } from 'src/app/core/models/device.model';
import { DeviceService } from '../../service/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit {
  device: IDevice | undefined;
  relatedDevices: Array<IDevice> = [];
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.listenToParamChanges();
  }

  listenToParamChanges() {}

  getRelatedDevices() {}

  getDeviceDetail(id: number) {
    this.deviceService.fetchDeviceById(id).subscribe((res) => {
      this.device = res;
    });
  }
}
