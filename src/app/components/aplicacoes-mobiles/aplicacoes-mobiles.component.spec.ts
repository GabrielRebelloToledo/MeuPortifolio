import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacoesMobilesComponent } from './aplicacoes-mobiles.component';

describe('AplicacoesMobilesComponent', () => {
  let component: AplicacoesMobilesComponent;
  let fixture: ComponentFixture<AplicacoesMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacoesMobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacoesMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
