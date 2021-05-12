import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarReceitaComponent } from './salvar-receita.component';

describe('SalvarReceitaComponent', () => {
  let component: SalvarReceitaComponent;
  let fixture: ComponentFixture<SalvarReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
