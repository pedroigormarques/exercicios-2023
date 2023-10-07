import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoCreateComponent } from './topico-create.component';

describe('TopicoCreateComponent', () => {
  let component: TopicoCreateComponent;
  let fixture: ComponentFixture<TopicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
