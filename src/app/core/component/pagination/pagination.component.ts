import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILinkPages} from "../../interfece/ILinkPages";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @Input() links!: Array<ILinkPages>;
  @Input() current_page!: number;
  @Input() last_page!: number;
  @Output() _linkNumber: EventEmitter<number> = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void { }
  
  page(pagesLabel: string) {
    if (pagesLabel === 'pre') {
      this._linkNumber.emit(this.current_page - 1);
      return;
    }
  
    if (pagesLabel === 'next') {
      this._linkNumber.emit(this.current_page + 1);
      return;
    }
    
    this._linkNumber.emit(Number(pagesLabel));
  }
}
