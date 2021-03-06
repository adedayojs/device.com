import { IDevice } from 'src/app/core/models/device.model';

export const devices: Array<IDevice> = [
  {
    id: 1,
    name: 'Device 1',
    status: 'Available',
    temperature: 'string',
    os: 'string',
    imageUrl: '/assets/images/phone.png',
    width: 'string',
    height: 'string',
    type: 'mobile',
    lastUsed: new Date(),
    purchased: new Date('1-12-2015'),
    isOnline: true,
  },
  {
    id: 2,
    name: 'Device 2',
    status: 'Offline',
    temperature: 'string',
    os: 'string',
    imageUrl: '',
    width: 'string',
    height: 'string',
    type: 'laptop',
    lastUsed: new Date(),
    purchased: new Date('1-12-2015'),
    isOnline: true,
  },
  {
    id: 3,
    name: 'Device 2',
    status: 'Hibernation',
    temperature: 'string',
    os: 'string',
    imageUrl: '',
    width: 'string',
    height: 'string',
    type: 'tablet',
    lastUsed: new Date(),
    purchased: new Date('1-12-2015'),
    isOnline: true,
  },
];
