import { getNoteData as note } from ".";

export class Card {
  constructor(note) {
    this.note = note,
    this.displayNote = this.template(note)
  }

  template(note) {
    // console.log("note in card", note);
    let noteValues = Object.values(note)
    const getNoteFormTemplate = document.querySelector(".note-form-template")
    const noteCard = getNoteFormTemplate.content.firstElementChild.cloneNode(true)
    noteCard.classList.remove("note")
    noteCard.classList.add("card")
    let cardInputs = Array.from(noteCard.getElementsByClassName("note-form"))

    for(let i = 0; i < noteValues.length; i++) {
      cardInputs[i].value = noteValues[i]
    }
    
    const getCardContainer = document.querySelector(".card-container")
    getCardContainer.appendChild(noteCard)
  }
}