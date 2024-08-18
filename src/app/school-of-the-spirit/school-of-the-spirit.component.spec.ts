import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCHOOLOFTHESPIRITComponent } from './school-of-the-spirit.component';

describe('SCHOOLOFTHESPIRITComponent', () => {
  let component: SCHOOLOFTHESPIRITComponent;
  let fixture: ComponentFixture<SCHOOLOFTHESPIRITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCHOOLOFTHESPIRITComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SCHOOLOFTHESPIRITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
