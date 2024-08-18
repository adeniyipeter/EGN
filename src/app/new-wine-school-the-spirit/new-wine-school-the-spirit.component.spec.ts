import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWineSchoolTheSpiritComponent } from './new-wine-school-the-spirit.component';

describe('NewWineSchoolTheSpiritComponent', () => {
  let component: NewWineSchoolTheSpiritComponent;
  let fixture: ComponentFixture<NewWineSchoolTheSpiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewWineSchoolTheSpiritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewWineSchoolTheSpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
