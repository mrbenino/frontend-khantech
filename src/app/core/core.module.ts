import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { RateComponent } from './component/rate/rate.component';
import {MatIconModule} from "@angular/material/icon";
import { PaginationComponent } from './component/pagination/pagination.component';
import { SpinnerComponent } from './component/spinner/spinner.component';


@NgModule({
  declarations: [
    RateComponent,
    PaginationComponent,
    SpinnerComponent
  ],
  exports: [
    RateComponent,
    PaginationComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
  ]
})
export class CoreModule {
}
