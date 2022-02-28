import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { DeviceService } from '../../service/device.service';

import { DevicesHomeComponent } from './devices-home.component';

describe('DevicesHomeComponent', () => {
  let component: DevicesHomeComponent;
  let fixture: ComponentFixture<DevicesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevicesHomeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
        {
          provide: DeviceService,
          useValue: {
            fetchAllDevices: () => of(),
          },
        },
        {
          provide: ToastrService,
          useValue: {},
        },
        {
          provide: Router,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
