import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILinkPages} from "../../interfece/ILinkPages";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @Input() links!: Array<ILinkPages>;
  @Output() _linkNumber: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  
  page(linkNumber: string) {
    this._linkNumber.emit(Number(linkNumber));
  }
}
