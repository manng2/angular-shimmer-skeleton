import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineShowcaseComponent } from './line-showcase.component';

describe('LineShowcaseComponent', () => {
  let component: LineShowcaseComponent;
  let fixture: ComponentFixture<LineShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
