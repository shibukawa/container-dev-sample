import { Component, OnInit } from '@angular/core';
import { FortuneService } from './fortune.service';
import { Observable } from 'rxjs';

import { environment } from '../environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  color = environment.color;
  label = environment.label;
  fortune$: Observable<string>;
  constructor(private fortune: FortuneService) {}

  ngOnInit() {
    this.fortune$ = this.fortune.getFortune();
  }
}
