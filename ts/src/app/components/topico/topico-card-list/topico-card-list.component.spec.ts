import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoCardListComponent } from './topico-card-list.component';

describe('TopicoCardListComponent', () => {
  let component: TopicoCardListComponent;
  let fixture: ComponentFixture<TopicoCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicoCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
