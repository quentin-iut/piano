import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoNoteComponent } from './exo-note.component';

describe('ExoNoteComponent', () => {
  let component: ExoNoteComponent;
  let fixture: ComponentFixture<ExoNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
