import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Test } from '../model';
import { getSectionsState } from '../../store/sections/sections.selectors';
import { setSearch } from '../../store/sections/sections.actions';

@Component({
  selector: 'eco-sections-container',
  templateUrl: './sections-container.component.html',
  styleUrls: ['./sections-container.component.scss']
})
export class SectionsContainerComponent {
  sections!: Test[];
  company: string = "";
  sections$!: Observable<Test[]>;
  search: string = "";

  constructor(private store: Store<{ sections: Test[] }>) {
    this.store.pipe(select(getSectionsState)).subscribe((value) => {
      this.sections = value.sections?.filter((course) => course.NAME.includes(value.search)) ?? [];
    });
  }

  searchTests(changes: any) {
    this.store.dispatch(setSearch({ payload: changes}));
  }
}
