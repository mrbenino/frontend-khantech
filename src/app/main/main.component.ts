import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../core/services/review.service";
import {IReview} from "../core/interfece/IReview";
import {ILinkPages} from "../core/interfece/ILinkPages";
import {SpinnerService} from "../core/services/spinner.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  reviews: Array<IReview> = [];
  
  current_page = 0;
  last_page = 0;
  links: Array<ILinkPages> = [];
  n = 4;
  
  constructor(private reviewService: ReviewService,
              public spinnerService: SpinnerService,) {
    this.getAllReviews(1);
  }
  
  ngOnInit(): void {
  }
  
  getAllReviews (n: number) {
    this.spinnerService.show();
    if (!n) {return}
    this.reviewService.getAllReviews(n).subscribe(result => {
      this.links = result.links;
      this.current_page = result.current_page;
      this.last_page = result.last_page;
      this.links.shift();
      this.links.pop();
      this.reviews = result.data;
      this.spinnerService.hide();
    });
  }
}
