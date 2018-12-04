import { Component, OnInit } from '@angular/core';
import { FortuneService } from './fortune.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fortune$: Observable<string>;
  constructor(private fortune: FortuneService) {}

  ngOnInit() {
    this.fortune$ = this.fortune.getFortune();
  }
}
