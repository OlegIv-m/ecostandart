import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { getSearch } from '../../store/sections/sections.selectors'
import { SectionsState } from '../../store/sections/types';

import { Test } from '../model';

@Component({
  selector: 'eco-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss'],

})
export class SubsectionComponent implements OnInit{
  @Input() subsection!: Test | undefined;

  subsections: Test | undefined;
  id: number | undefined;
  isLastFolder = false;
  isFolder = false;
  isSearched = false;

  public isCollapsed = true;

  constructor(private store: Store<SectionsState>) {
    this.store.pipe(select(getSearch)).subscribe((search) => { this.isSearched = Boolean(search.length) });
  }

  ngOnInit(): void {
    this.isFolder = this.subsection?.TYPE === 'folder';
    this.isLastFolder = Boolean(this.subsection?.CHILDREN?.[0]?.CHILDREN?.[0].TYPE === 'item');
  }

  handleFound(event: Event) {
    this.isCollapsed = false;
  }

}
