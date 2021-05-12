import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerContasComponent } from './ver-contas.component';

describe('VerContasComponent', () => {
  let component: VerContasComponent;
  let fixture: ComponentFixture<VerContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
