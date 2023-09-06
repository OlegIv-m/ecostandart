import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute} from '@angular/router';

import { SectionsState } from '../../store/sections/types';
import { setSearch } from '../../store/sections/sections.actions';
import { getSections } from '../../store/sections/sections.selectors';

import { Test } from '../model';

@Component({
  selector: 'eco-subsection-container',
  templateUrl: './subsection-container.component.html',
  styleUrls: ['./subsection-container.component.scss']
})
export class SubsectionContainerComponent {
  subsections: Test | undefined;
  id: number | undefined;
  search = "";

  constructor(private activateRoute: ActivatedRoute, private store: Store<SectionsState>) {
    const subscription2 = this.activateRoute.params.subscribe(params => this.id = params['sectionId']);
    const subscription1 = store.select(getSections).subscribe((value) => { this.subsections = value?.find((value) => value.ID === this.id)});
    subscription1.unsubscribe();
    subscription2.unsubscribe();
  }

  searchTests(changes: any) {
    this.store.dispatch(setSearch({ payload: changes}));
  }
}
