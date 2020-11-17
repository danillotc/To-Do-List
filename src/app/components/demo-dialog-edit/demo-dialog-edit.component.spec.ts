import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDialogEditComponent } from './demo-dialog-edit.component';

describe('DemoDialogEditComponent', () => {
  let component: DemoDialogEditComponent;
  let fixture: ComponentFixture<DemoDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDialogEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
