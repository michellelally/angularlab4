import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

  GetStudentData(): Observable<any> {
    return this.http.get("https://jsonblob.com/api/jsonblob/e4a54746-1c92-11e8-8434-35db40ccd55b")
    .map(obs => obs.json());
  }

  GetNewsData():Observable<any> {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=rte&apiKey=d73d888056144347b868b8e262025379")
    .map(news => news.json());
  }

}
