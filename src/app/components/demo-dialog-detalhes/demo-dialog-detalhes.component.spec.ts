import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDialogDetalhesComponent } from './demo-dialog-detalhes.component';

describe('DemoDialogDetalhesComponent', () => {
  let component: DemoDialogDetalhesComponent;
  let fixture: ComponentFixture<DemoDialogDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDialogDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDialogDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
