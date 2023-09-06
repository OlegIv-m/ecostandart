import { Test } from '../../app/model';

export interface AppState {
  sections: SectionsState;
}

export interface SectionsState {
  sections: Test[] | null;
  search: string;
}
