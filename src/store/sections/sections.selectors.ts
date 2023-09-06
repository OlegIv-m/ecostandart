import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SectionsState } from './types'

export const getSectionsState = createFeatureSelector<SectionsState>('sections');

export const getSections = createSelector(getSectionsState, (state) => state.sections);
export const getSearch = createSelector(getSectionsState, (state) => state.search);
