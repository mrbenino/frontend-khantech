import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ReviewService} from "../core/services/review.service";
import {TokenStorageService} from "../core/services/token-storage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  
  hide = true;
  constructor(private fb: FormBuilder,
              private router: Router,
              private reviewService: ReviewService,
              private tokenStorageService: TokenStorageService) {
    this.form = this.initForm();
  }
  
  ngOnInit(): void {}
  
  initForm() {
    return this.fb.group({
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
    });
  }
  
  send() {
    const formData = {
      name: this.form.controls['name'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };
    
    this.reviewService.register(formData).subscribe(result => {
      if (result.token) {
        this.tokenStorageService.saveToken(result.token);
        this.router.navigate(['/admin']);
      }
    });
  }

}
