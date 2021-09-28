import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpostComponent } from './elpost.component';

describe('ElpostComponent', () => {
  let component: ElpostComponent;
  let fixture: ComponentFixture<ElpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
