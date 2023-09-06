import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsContainerComponent } from './sections-container.component';

describe('SectionsContainerComponent', () => {
  let component: SectionsContainerComponent;
  let fixture: ComponentFixture<SectionsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsContainerComponent]
    });
    fixture = TestBed.createComponent(SectionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
