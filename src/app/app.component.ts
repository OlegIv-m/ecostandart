import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Test, ResponseTest } from './model';
import { setSections } from '../store/sections/sections.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ecostandart';
  company: string = "";

  urls = ['card1.png', 'card2.png', 'card3.png']

  constructor(private store: Store<{ sections: Test[] }>) {}

  ngOnInit(): void {
    const reqeustInfo = new Request('https://test.dva14.ru/tests.json');
    fetch(reqeustInfo).then((response) => {
      response.json().then((data: ResponseTest) => {
        const sections = data.result.testsTree[0]?.CHILDREN?.map((section, index) => ({ ...section, url: `./assets/img/${this.urls[index]}`})) ?? [];
        this.company = data.result.testsTree[0].NAME;
        console.log("data: ", data);

        this.store.dispatch(setSections({ payload: sections }));
      })
    })
  }
}
