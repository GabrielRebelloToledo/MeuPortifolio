import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacoesWebComponent } from './aplicacoes-web.component';

describe('AplicacoesWebComponent', () => {
  let component: AplicacoesWebComponent;
  let fixture: ComponentFixture<AplicacoesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacoesWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacoesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
