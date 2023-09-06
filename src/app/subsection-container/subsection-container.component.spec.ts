import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionContainerComponent } from './subsection-container.component';

describe('SubsectionContainerComponent', () => {
  let component: SubsectionContainerComponent;
  let fixture: ComponentFixture<SubsectionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubsectionContainerComponent]
    });
    fixture = TestBed.createComponent(SubsectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
