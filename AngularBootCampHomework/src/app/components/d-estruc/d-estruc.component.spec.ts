import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEstrucComponent } from './d-estruc.component';

describe('DEstrucComponent', () => {
  let component: DEstrucComponent;
  let fixture: ComponentFixture<DEstrucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DEstrucComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DEstrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
