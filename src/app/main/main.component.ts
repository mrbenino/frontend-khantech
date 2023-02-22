import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../core/services/review.service";
import {IReview} from "../core/interfece/IReview";
import {ILinkPages} from "../core/interfece/ILinkPages";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  reviews: Array<IReview> = [];
  links: Array<ILinkPages> = [];
  n = 4;
  
  constructor(private reviewService: ReviewService) {
    this.getAllReviews(1);
  }
  
  ngOnInit(): void {}
  
  getAllReviews (n: number) {
    if (!n) {return}
    this.reviewService.getAllReviews(n).subscribe(result => {
      this.links = result.links;
      this.reviews = result.data;
    });
  }
}
