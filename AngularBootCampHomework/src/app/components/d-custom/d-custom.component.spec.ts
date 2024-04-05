import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCustomComponent } from './d-custom.component';

describe('DCustomComponent', () => {
  let component: DCustomComponent;
  let fixture: ComponentFixture<DCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
