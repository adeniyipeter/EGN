import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For2023Component } from './for-2023.component';

describe('For2023Component', () => {
  let component: For2023Component;
  let fixture: ComponentFixture<For2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [For2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(For2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
