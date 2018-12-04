import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IFortuneResponse {
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class FortuneService {

  constructor(private http: HttpClient) {
  }

  getFortune(): Observable<string> {
    return this.http.get<IFortuneResponse>('/api/fortune')
      .pipe(map(response => {
        return response.result;
      }));
  }
}
