import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';

import { SectionsState } from '../../store/sections/types';
import { getSearch } from '../../store/sections/sections.selectors';
import { Test } from '../model';

@Component({
  selector: 'eco-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {
  @Input() test!: Test;
  @ViewChild('ref', {read: ElementRef}) reference!: ElementRef;
  title!: string | SafeHtml;
  search!: string;
  found!: boolean;
  toggle: boolean = false;

  constructor(private store: Store<SectionsState>, public sanitizer: DomSanitizer) {
    this.store.pipe(select(getSearch)).subscribe((search) => {
      this.search = search;
      this.title = this.test?.NAME;
      this.found = false;
      console.log("subscribe");
      if (this.search.length && this.test?.NAME.includes(this.search)) {
        this.title = sanitizer.bypassSecurityTrustHtml(this.test.NAME.replace(search, `<span style='background-color: yellow'>${search}</span>`));
        this.found = true;
        if (this.found) {
          const foundEvent = new Event('found', { bubbles: true});
          this.reference.nativeElement.dispatchEvent(foundEvent);
        }
      }
    });
  }

  ngOnInit(): void {
    this.title = this.test.NAME;
  }
}
