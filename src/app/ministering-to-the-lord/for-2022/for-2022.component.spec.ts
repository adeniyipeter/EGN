import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For2022Component } from './for-2022.component';

describe('For2022Component', () => {
  let component: For2022Component;
  let fixture: ComponentFixture<For2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [For2022Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(For2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
