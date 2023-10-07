import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioCardListComponent } from './comentario-card-list.component';

describe('ComentarioCardListComponent', () => {
  let component: ComentarioCardListComponent;
  let fixture: ComponentFixture<ComentarioCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
