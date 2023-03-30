import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Screen1Page } from './screen1.page';

describe('Screen1Page', () => {
  let component: Screen1Page;
  let fixture: ComponentFixture<Screen1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Screen1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
