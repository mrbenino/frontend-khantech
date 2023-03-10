import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../core/services/review.service";
import {SpinnerService} from "../core/services/spinner.service";
import {TokenStorageService} from "../core/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  srcResult: any;
  
  message: string | undefined;
  dataSource: Array<{ id: number; reviewer: string; email: string; review: string; rating: number; employee: string; employees_position: string; unique_employee_number: string; company: string; company_description: string; created_at: string; updated_at: string; }> | undefined;
  constructor(private reviewService: ReviewService,
              public spinnerService: SpinnerService,
              private router: Router,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void { }
  
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
      
      reader.readAsArrayBuffer(inputNode.files[0]);
      const formData = new FormData();
      this.spinnerService.show();
      formData.append('file', inputNode.files[0], inputNode.files[0].name);
      this.reviewService.sendFileCsv(formData).subscribe(result => {
        this.message = result.success;
        this.dataSource = result.list;
        this.spinnerService.hide();
      })
    }
  }
  
  removeRecord(){
    this.spinnerService.show();
    this.reviewService.removeRecord().subscribe(result => {
      this.message = result.message;
      this.dataSource = [];
      this.spinnerService.hide();
    })
  }
  
  logOut() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/']);
  }
}
