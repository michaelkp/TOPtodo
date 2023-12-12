import { getNoteData as note } from ".";

export class Card {
  constructor(note) {
    this.note = note
    this.displayNote = this.template(note)
  }

  template(note) {
    // console.log(note);
    // console.log(Array.from(note.entries()));
    const noteArray = Array.from(note.values())
    // let noteValues = Object.values(note)
    const getNoteFormTemplate = document.querySelector(".note-form-template")
    const noteCard = getNoteFormTemplate.content.firstElementChild.cloneNode(true)
    noteCard.classList.remove("note")
    noteCard.classList.add("card")
    let cardInputs = Array.from(noteCard.getElementsByClassName("note-form"))
    // for (var [key, value] of note.values()) { 
    //   console.log(key, value);
    //   const values = [value]
    //   for(let i = 0; i < values.length; i++) {
    //     console.log(values[i]);
    //     cardInputs[i].value = values.value[i]
    //   }
    // }
    const noteValues = Array.from(note.values())
    //console.log(noteValues);
    for(let i = 0; i < noteValues.length; i++) {
      //console.log(noteValues[i]);
      cardInputs[i].value = noteValues[i]
    }
    
    const getCardContainer = document.querySelector(".card-container")
    getCardContainer.appendChild(noteCard)
    changeSaveBtnToEditBtn()
  }
}

function changeSaveBtnToEditBtn() {
  const saveBtn = document.querySelector(".card #note-save")
  console.log(saveBtn);
  saveBtn.textContent = "Edit"
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("save btn in card");
  })
}