export interface IDevice {
  id: number;
  name: string;
  status: string;
  temperature: string;
  os: string;
  imageUrl: string;
  width: string;
  height: string;
  type: DeviceType;
  lastUsed: Date;
  purchased: Date;
  isOnline: boolean;
}

export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'laptop';
