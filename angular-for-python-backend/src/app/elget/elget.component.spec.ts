import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElgetComponent } from './elget.component';

describe('ElgetComponent', () => {
  let component: ElgetComponent;
  let fixture: ComponentFixture<ElgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
