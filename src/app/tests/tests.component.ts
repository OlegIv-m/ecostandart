import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { SectionsState } from '../../store/sections/types';
import { getSearch } from '../../store/sections/sections.selectors'
import { Test } from '../model';
import { SubsectionComponent } from '../subsection/subsection.component';

@Component({
  selector: 'eco-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent {
  @Input() tests!: Test[] | [];
  @Output() openCollapse = new EventEmitter<boolean>();

  search!: string;
  company: string = "";
  parent!: SubsectionComponent;

  constructor(private store: Store<SectionsState>) {
    this.store.pipe(select(getSearch)).subscribe((search) => {
      this.search = search;
    });
  }

  showTestItem(testName: string) {
    return testName.includes(this.search);
  }

  setParent(parent: SubsectionComponent) {
    this.parent = parent;
  }
}
