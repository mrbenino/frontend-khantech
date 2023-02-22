import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MatIconModule} from "@angular/material/icon";
import {BarRatingModule} from "ngx-bar-rating";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    BarRatingModule,
    CoreModule,
  ]
})
export class MainModule {
}
