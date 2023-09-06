import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsContainerComponent } from './sections-container/sections-container.component';
import { SubsectionContainerComponent } from './subsection-container/subsection-container.component';

const routes: Routes = [
  { path: '', component: SectionsContainerComponent,  },
  { path: 'subsection', component: SubsectionContainerComponent },
  { path: 'subsection/:sectionId', component: SubsectionContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
