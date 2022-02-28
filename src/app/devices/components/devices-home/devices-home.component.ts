import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDevice } from 'src/app/core/models/device.model';
import { DeviceService } from '../../service/device.service';

@Component({
  selector: 'app-devices-home',
  templateUrl: './devices-home.component.html',
  styleUrls: ['./devices-home.component.scss'],
})
export class DevicesHomeComponent implements OnInit {
  constructor(private deviceService: DeviceService, private router: Router) {}

  devices: IDevice[] = [];

  ngOnInit(): void {
    this.getAllDevicesForUser();
  }

  getAllDevicesForUser() {
    this.deviceService.fetchAllDevices().subscribe((res) => {
      this.devices = res;
    });
  }

  navigate(id: number) {
    this.router.navigate(['devices', id]);
  }
}
