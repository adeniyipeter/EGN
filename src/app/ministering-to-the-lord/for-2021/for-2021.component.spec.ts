import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For2021Component } from './for-2021.component';

describe('For2021Component', () => {
  let component: For2021Component;
  let fixture: ComponentFixture<For2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [For2021Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(For2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
