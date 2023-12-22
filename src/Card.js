import { activeProject } from "./Projects";

export class Card {
  constructor(note, project) {
    this.displayNote = this.template(note, project, activeProject)
    // this.editBtn = this.editBtn(project)
  }
  template(note, project) {
    console.log(note.note);
    console.log(project);
    console.log(project.notes);
    const getNoteFormTemplate = document.querySelector(".note-form-template")
    const noteCard = getNoteFormTemplate.content.firstElementChild.cloneNode(true)
      noteCard.classList.remove("note")
      noteCard.classList.add("card")
      noteCard.classList.add(`${project.name}`)
    const getPostedDateSpan = noteCard.querySelector(".posted-date")
      getPostedDateSpan.textContent = `${note.date}`
    const cardInputs = Array.from(noteCard.getElementsByClassName("note-form"))
    const noteValues = Array.from(note.note.values())
      cardInputs.forEach((input, i) => {
        input.value = noteValues[i]
      })
     const getCardContainer = document.querySelector(".card-container")
      getCardContainer.appendChild(noteCard)
      this.editBtn(note, noteCard, project, getPostedDateSpan)
  }
  editBtn(note, noteCard, project) {
    const editBtn = noteCard.querySelector(".card #note-save")
      editBtn.textContent = "Edit"
      editBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const projectNotes = project.notes
          if (projectNotes.indexOf(note) === note.id) {
            const currentNoteValues = noteCard.querySelectorAll(".note-form")
              currentNoteValues.forEach(input => {
                let oldNoteValue = note.note.get(`${input.name}`)
                if (input.value != oldNoteValue) {
                  note.note.set(`${input.name}`, input.value)
                }
            })
        }
      })
    }
}