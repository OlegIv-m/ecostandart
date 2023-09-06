import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { StoreModule } from '@ngrx/store';

import { TestsComponent } from './tests/tests.component';
import { TestItemComponent } from './test-item/test-item.component';
import { SectionComponent } from './section/section.component';
import { SubsectionComponent } from './subsection/subsection.component';
import { HeaderComponent } from './header/header.component';
import { SectionsContainerComponent } from './sections-container/sections-container.component';
import { sectionsReducer } from '../store/sections/sections.reducer';
import { SubsectionContainerComponent } from './subsection-container/subsection-container.component';
import { CustomSerializer} from '../store/serializer'
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers as RouterReducer } from '../store/router.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    TestItemComponent,
    SectionComponent,
    SubsectionComponent,
    HeaderComponent,
    SectionsContainerComponent,
    SubsectionContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    StoreModule.forRoot({sections: sectionsReducer, router: RouterReducer.router}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer})
  ],
  providers: [NgxBootstrapIconsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
