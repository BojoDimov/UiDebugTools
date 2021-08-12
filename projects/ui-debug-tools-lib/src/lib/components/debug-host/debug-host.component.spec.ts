import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugHostComponent } from './debug-host.component';

describe('DebugHostComponent', () => {
  let component: DebugHostComponent;
  let fixture: ComponentFixture<DebugHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
