import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDevice } from 'src/app/core/models/device.model';

@Component({
  selector: 'app-device-list-item',
  templateUrl: './device-list-item.component.html',
  styleUrls: ['./device-list-item.component.scss'],
})
export class DeviceListItemComponent implements OnInit {
  @Input() device!: IDevice;
  @Input() showInfo = false;
  @Output() infoClick: EventEmitter<true> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  get imageUrl(): string {
    if (this.device.imageUrl) {
      return this.device.imageUrl;
    }

    let url = '';
    switch (this.device.type) {
      case 'desktop':
        url = '/assets/images/laptop.jpg';
        break;
      case 'laptop':
        url = '/assets/images/laptop.jpg';
        break;
      case 'mobile':
        url = '/assets/images/phone.png';
        break;
      case 'tablet':
        url = '/assets/images/tablet.png';
        break;
      default:
        url = '';
        break;
    }
    return url;
  }
  emitInfo() {
    this.infoClick.emit(true);
  }
}
