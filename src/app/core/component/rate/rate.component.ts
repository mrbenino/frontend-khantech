import {Component, Input, OnInit} from '@angular/core';
import {ReviewService} from "../../services/review.service";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() rate!: number;
  starWidth = 1;
  
  constructor() {}
  
  ngOnInit(): void {
    this.rateProduct(this.rate);
  }
  
  rateProduct(rateValue: number) {
    this.starWidth = rateValue * 85 / 5.0;
  }
}
