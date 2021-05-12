import { TestBed } from '@angular/core/testing';

import { ContaReceitaService } from './conta-receita.service';

describe('ContaReceitaService', () => {
  let service: ContaReceitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaReceitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
