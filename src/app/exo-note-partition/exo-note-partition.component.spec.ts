import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoNotePartitionComponent } from './exo-note-partition.component';

describe('ExoNotePartitionComponent', () => {
  let component: ExoNotePartitionComponent;
  let fixture: ComponentFixture<ExoNotePartitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoNotePartitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoNotePartitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
