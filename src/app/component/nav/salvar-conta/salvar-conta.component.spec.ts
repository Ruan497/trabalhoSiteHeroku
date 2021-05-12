import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarContaComponent } from './salvar-conta.component';

describe('SalvarContaComponent', () => {
  let component: SalvarContaComponent;
  let fixture: ComponentFixture<SalvarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
