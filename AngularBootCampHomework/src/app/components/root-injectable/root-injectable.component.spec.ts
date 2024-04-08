import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootInjectableComponent } from './root-injectable.component';

describe('RootInjectableComponent', () => {
  let component: RootInjectableComponent;
  let fixture: ComponentFixture<RootInjectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RootInjectableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootInjectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
