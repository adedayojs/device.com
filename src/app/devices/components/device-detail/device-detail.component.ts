import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, of, switchMap, tap } from 'rxjs';
import { IDevice } from 'src/app/core/models/device.model';
import { untilDestroyed } from 'src/app/core/utils/untilDestroy';
import { DeviceService } from '../../service/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit, OnDestroy {
  device: IDevice | undefined;
  relatedDevices: Array<IDevice> = [];
  loading = true;
  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listenToParamChanges();
  }
  ngOnDestroy(): void {}

  listenToParamChanges() {
    this.route.params
      .pipe(
        untilDestroyed(this),
        switchMap((res) => {
          this.loading = true;
          const id = Number(res['id']);
          return this.deviceService.fetchDeviceById(id);
        }),

        tap((res) => {
          this.device = res;
          this.getRelatedDevices();
        })
      )
      .subscribe({
        next: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toastr.error('Error Fetching Device Details');
        },
      });
  }

  getRelatedDevices() {
    this.loading = true;
    this.deviceService.fetchAllDevices().subscribe((res) => {
      this.relatedDevices = res;
      this.loading = false;
    });
  }

  getDeviceDetail(id: number) {
    this.deviceService.fetchDeviceById(id).subscribe((res) => {
      this.device = res;
    });
  }

  navigate(id: number) {
    this.router.navigate(['devices', id]);
  }
}
