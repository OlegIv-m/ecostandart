import { createAction, props } from '@ngrx/store';

import { Test } from '../../app/model';

export const setSections = createAction('[Sections] setSections', props<{payload: Test[] }>());
export const resetSections = createAction('[Sections] resetSections');

export const setSearch = createAction('[Sections] setSearch', props<{payload: string }>());
export const resetSearch = createAction('[Sections] resetSearch');
