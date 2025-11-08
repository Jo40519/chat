import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalaoChat } from './balao-chat';

describe('BalaoChat', () => {
  let component: BalaoChat;
  let fixture: ComponentFixture<BalaoChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalaoChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalaoChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
