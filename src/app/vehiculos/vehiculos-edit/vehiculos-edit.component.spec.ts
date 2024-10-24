import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVehiculosComponent } from './vehiculos-edit.component';

describe('VehiculosEditComponent', () => {
  let component: EditarVehiculosComponent;
  let fixture: ComponentFixture<EditarVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
