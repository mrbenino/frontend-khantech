import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IReview} from "../interfece/IReview";
import {ILinkPages} from "../interfece/ILinkPages";
import {catchError, throwError} from "rxjs";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  token: string | null | undefined;
  
  headers: HttpHeaders | undefined;
  constructor(private http: HttpClient,
              private tokenStorageService: TokenStorageService) { }
  getAllReviews(pageNumber: number = 1) {
    return this.http
      .get<{
        data: Array<IReview>,
        last_page: number,
        current_page: number,
        links: Array<ILinkPages>
      }>(`${environment.reviewApi}/review?page=${pageNumber}`)
      .pipe(catchError((err) => throwError(err.massage)));
  }
  
  sendFileCsv(data: any) {
    this.token = this.tokenStorageService.getToken();
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  
    const httpOptions = {
      headers: this.headers
    };
  
    return this.http.post<{success: string, list: {
        'id': number,
        'reviewer': string,
        'email': string,
        'review': string,
        'rating': number,
        'employee': string,
        'employees_position': string,
        'unique_employee_number': string,
        'company': string,
        'company_description': string,
        'created_at': string,
        'updated_at': string
      }[]}>(`${environment.reviewApi}/review`, data, httpOptions);
  }
  
  removeRecord() {
    this.token = this.tokenStorageService.getToken();
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    
    const httpOptions = {
      headers: this.headers
    };
    
    return this.http.delete<{message: string}>(`${environment.reviewApi}/review`, httpOptions)
      .pipe(catchError((err) => throwError(err.message)));
  }
  
  login(data: any) {
    return this.http.post<{token: string}>(`${environment.reviewApi}/login`, data);
  }
  
  register(data: any) {
    return this.http.post<{token: string}>(`${environment.reviewApi}/register`, data);
  }
}
