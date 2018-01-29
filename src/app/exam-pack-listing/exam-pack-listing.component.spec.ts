import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPackListingComponent } from './exam-pack-listing.component';

describe('ExamPackListingComponent', () => {
  let component: ExamPackListingComponent;
  let fixture: ComponentFixture<ExamPackListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPackListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPackListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
