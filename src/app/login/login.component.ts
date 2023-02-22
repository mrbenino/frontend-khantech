import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReviewService} from "../core/services/review.service";
import {TokenStorageService} from "../core/services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };
    
    this.reviewService.login(formData).subscribe(result => {
      if (result.token) {
        this.tokenStorageService.saveToken(result.token);
        this.router.navigate(['/admin']);
      }
    });
  }
}
