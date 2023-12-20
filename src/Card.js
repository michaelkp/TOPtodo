import { activeProject } from "./Projects";

export class Card {
  constructor(note, project) {
    this.displayNote = this.template(note, activeProject)
    // this.changeSaveBtnToEditBtn = this.changeSaveBtnToEditBtn( project)
  }
  
  template(project) {
    const noteArray = Array.from(project.notes.values())
    console.log(noteArray);
    const getNoteFormTemplate = document.querySelector(".note-form-template")
    const noteCard = getNoteFormTemplate.content.firstElementChild.cloneNode(true)
    noteCard.classList.remove("note")
    noteCard.classList.add("card")
    noteCard.classList.add(`${project.name}`)
    const getPostedDateSpan = noteCard.querySelector(".posted-date")
      getPostedDateSpan.textContent = `${project.notes.get("date")}`
    const cardInputs = Array.from(noteCard.getElementsByClassName("note-form"))
      for(let i = 0; i < noteArray.length - 1; i++) {
        cardInputs[i].value = noteArray[i]
      }
    const getCardContainer = document.querySelector(".card-container")
      getCardContainer.appendChild(noteCard)
      this.editBtn(noteCard, project)
  }
  editBtn(noteCard, project) {
    console.log("CARD +++++++");
    console.log(noteCard);
    console.log(project);
    const postedDate = project._date
    console.log(postedDate);
    const editBtn = noteCard.querySelector(".card #note-save")
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("EDIT BTN ========");
      console.log(project);
      console.log(noteCard);
      console.log(project._date);
      const card = Array.from(noteCard)
      console.log(card);
      const [date, title, note, ...rest] = card
      console.log(date);
      console.log("edit btn in card");
    })
  }
}