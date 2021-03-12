import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-note',
  templateUrl: './exo-note.component.html',
  styleUrls: ['./exo-note.component.scss']
})
export class ExoNoteComponent implements OnInit {

  constructor() { }

  notes = [
    {"value": "DO", "suivante" : "RE", "precedente": "SI" }, 
    {"value": "RE", "suivante" : "MI", "precedente": "DO" }, 
    {"value": "MI", "suivante" : "FA", "precedente": "RE" }, 
    {"value": "FA", "suivante" : "SOL", "precedente": "MI" }, 
    {"value": "SOL", "suivante" : "LA", "precedente": "FA" }, 
    {"value": "LA", "suivante" : "SI", "precedente": "SOL" }, 
    {"value": "SI", "suivante" : "DO", "precedente": "LA" }
  ]

  readonly NIVEAU_1 = 1;
  readonly NIVEAU_2 = 2;
  readonly NIVEAU_3 = 3;

  niveau;
  note;
  answer;
  displayRep;
  
  ngOnInit() {
    this.setNote(this.NIVEAU_1);
  }

  setNote(niveau) {
    this.displayRep = false;
    this.niveau = niveau;
    this.note = this.notes[this.randomInteger(0, this.notes.length - 1)];

    if (niveau === this.NIVEAU_1) {
      this.answer = "suivante";
    }
    if (niveau === this.NIVEAU_2) {
        this.answer = "precedente";
    } 
    if (niveau === this.NIVEAU_3) {
      const arr = ["suivante", "precedente"];
      this.answer = arr[this.randomInteger(0,1)];
    }
  }

  /**
  * Returns a random number between min (inclusive) and max (exclusive)
  */

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  affichageReponse() {
    this.displayRep = true;
  }

  next() {
    this.setNote(this.niveau);
  }
}






