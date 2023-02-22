import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../services/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  
  spinnerStatus: any = false;
  constructor(private spinner: SpinnerService, private cd: ChangeDetectorRef) {
    this.spinner.spinnerStatus.subscribe((next: any) => {
      this.spinnerStatus = next;
      this.cd.detectChanges();
    });
  }

  ngOnInit(): void {
  }

}
