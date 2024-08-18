import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBiblestudyComponent } from './message-biblestudy.component';

describe('MessageBiblestudyComponent', () => {
  let component: MessageBiblestudyComponent;
  let fixture: ComponentFixture<MessageBiblestudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBiblestudyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageBiblestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
