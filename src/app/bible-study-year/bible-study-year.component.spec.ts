import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleStudyYearComponent } from './bible-study-year.component';

describe('BibleStudyYearComponent', () => {
  let component: BibleStudyYearComponent;
  let fixture: ComponentFixture<BibleStudyYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleStudyYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibleStudyYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
