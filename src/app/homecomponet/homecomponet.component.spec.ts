import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomponetComponent } from './homecomponet.component';

describe('HomecomponetComponent', () => {
  let component: HomecomponetComponent;
  let fixture: ComponentFixture<HomecomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecomponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomecomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
