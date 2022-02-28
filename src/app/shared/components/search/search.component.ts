import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'src/app/core/utils/untilDestroy';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  // This would have been better tracked by making this component impolement value accessor but due to time constraint. I'm leaving it this simple.
  inputValueControl = new FormControl('');
  @Input() isFunctional = true;
  @Output() currentValue: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.trackChanges();
  }
  ngOnDestroy(): void {}
  trackChanges() {
    this.inputValueControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((val: string) => {
        console.log(val);
        if (this.isFunctional) {
          this.currentValue.emit(val);
        }
      });
  }
}
