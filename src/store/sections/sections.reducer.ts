import { createReducer, on } from '@ngrx/store';

import { setSections, resetSections, setSearch, resetSearch } from './sections.actions';
import { SectionsState } from './types';

export const initialState: SectionsState  = {
  sections: null,
  search: "",
}


export const sectionsReducer = createReducer(
  initialState,
  on(setSections, (_state, { payload }) => { return { ..._state, sections: payload} }),
  on(resetSections, (_state) => { return { ..._state, sections: null } }),
  on(setSearch, (_state, { payload }) => { return { ..._state, search: payload } }),
  on(resetSearch, (_state) => { return { ..._state, search: '' } }),
);
