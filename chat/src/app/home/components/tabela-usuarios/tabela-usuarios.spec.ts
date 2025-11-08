import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUsuarios } from './tabela-usuarios';

describe('TabelaUsuarios', () => {
  let component: TabelaUsuarios;
  let fixture: ComponentFixture<TabelaUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaUsuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaUsuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
