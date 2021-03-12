// export interface NotesGroupe {
//   name: string;
//   completed: boolean;
//   subNotes?: Note[];
// }

// export interface Note {
//   name: string;
//   img: string;
//   completed: boolean;
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-note-partition',
  templateUrl: './exo-note-partition.component.html',
  styleUrls: ['./exo-note-partition.component.scss']
})
export class ExoNotePartitionComponent implements OnInit {
  notes = [
    {
      name: "fa 1", 
      completed: false,
      subNotes: [
        {name: "D0", completed: false, img: "XX.png" }, {name: "RE", completed: false, img: "XX.png" }, 
        {name: "MI", completed: false, img: "XX.png" }, {name: "FA", completed: false, img: "XX.png" }, 
        {name: "SOL", completed: false, img: "XX.png" }, {name: "LA", completed: false, img: "XX.png" }, 
        {name: "SI", completed: false, img: "XX.png" }
      ]
    },
    {
      name: "fa 2", 
      completed: false,
      subNotes: [
        {name: "D0", completed: false, img: "XX.png" }, {name: "RE", completed: false, img: "XX.png" }, 
        {name: "MI", completed: false, img: "XX.png" }, {name: "FA", completed: false, img: "XX.png" }, 
        {name: "SOL", completed: false, img: "XX.png" }, {name: "LA", completed: false, img: "XX.png" }, 
        {name: "SI", completed: false, img: "XX.png" }
      ]
    },
    {
      name: "fa 3", 
      completed: false,
      subNotes: [
        {name: "D0", completed: false, img: "XX.png" }
      ]
    },
    {
      name: "do 3", 
      completed: false,
      subNotes: [
        {name: "D0", completed: false, img: "XX.png" }, {name: "RE", completed: false, img: "XX.png" }, 
        {name: "MI", completed: false, img: "XX.png" }, {name: "FA", completed: false, img: "XX.png" }, 
        {name: "SOL", completed: false, img: "XX.png" }, {name: "LA", completed: false, img: "XX.png" }, 
        {name: "SI", completed: false, img: "XX.png" }
      ]
    },
    {
      name: "do 4", 
      completed: false,
      subNotes: [
        {name: "D0", completed: false, img: "XX.png" }, {name: "RE", completed: false, img: "XX.png" }, 
        {name: "MI", completed: false, img: "XX.png" }, {name: "FA", completed: false, img: "XX.png" }, 
        {name: "SOL", completed: false, img: "XX.png" }, {name: "LA", completed: false, img: "XX.png" }, 
        {name: "SI", completed: false, img: "XX.png" }
      ]
    },
    {
      name: "do 5", 
      completed: false,
      subNotes: [
        {name: "D0", completed: false, img: "XX.png" }
      ]
    },
  ];

  allComplete = [];
  displayRep;

  constructor() { }

  
  ngOnInit() {
    for (const note of this.notes) {
      this.allComplete.push(false)
    }
  }


  updateAllComplete(note,i) {
    this.allComplete[i] = note.subNotes != null && note.subNotes.every(t => t.completed);
  }

  someComplete(note): boolean {
    if (note.subNotes == null) {
      return false;
    }
    return note.subNotes.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean, note, i) {
    this.allComplete[i] = completed;
    if (note.subNotes == null) {
      return;
    }
    note.subNotes.forEach(t => t.completed = completed);
  }

  affichageReponse() {
    this.displayRep = true;
  }

  next() {
    // this.setNote(this.niveau);
  }

}

