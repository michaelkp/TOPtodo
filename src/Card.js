import { activeProject } from "./Projects";
console.log("CARD");
export class Card {
  constructor(note, project) {
    this.displayNote = this.template(note, project, activeProject)
    // this.editBtn = this.editBtn(project)
  }
  template(note, project) {
    console.log(note);
    console.log(note.note);
    console.log(project);
    // console.log(project.notes);
    const getNoteFormTemplate = document.querySelector(".note-form-template")
    const noteCard = getNoteFormTemplate.content.firstElementChild.cloneNode(true)
    console.log(noteCard);
      noteCard.classList.remove("note")
      noteCard.classList.add("card")
      noteCard.classList.add(`${project.name}`)
      console.log(note.displayed);
      note.displayed = true
   
    const getPostedDateSpan = noteCard.querySelector(".posted-date")
      getPostedDateSpan.textContent = `${note.date}`
    const cardInputs = Array.from(noteCard.getElementsByClassName("note-form"))
    const noteValues = Array.from(note.note.values())
      cardInputs.forEach((input, i) => {
        console.log(noteValues[i]);
        console.log(input);
        console.log(input.classList);
        if (input.classList.contains("note-projects")) {
          console.log("SELECT=====");
          const projectList = noteCard.querySelector(".note-projects")
          const select = noteCard.querySelector("select")
          select.remove()
          const projectSpan = document.createElement("span")
          projectSpan.textContent = noteValues[i]
          projectList.appendChild(projectSpan)
        }
        if (noteValues[i] === "low" || noteValues[i] === "medium" || noteValues[i] === "high") {
          console.log("PRIORITY ============");
          console.log(noteValues);
          this.borderColor(noteValues[i], noteCard)
          const selectMenu = noteCard.querySelector(".note-priority")
          console.log(selectMenu.options);
          for(const option of selectMenu) {
            if (option.value === noteValues[i]) {
              option.setAttribute("selected", true)
            }
          }
        }
        input.value = noteValues[i]
      })
     const getCardContainer = document.querySelector(".card-container")
      getCardContainer.appendChild(noteCard)
      this.editBtn(note, noteCard, project, getPostedDateSpan)
      this.deleteBtn(note, noteCard, project, getPostedDateSpan)

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
                  console.log(input.value);
                  console.log(note.note);
                  if (input.value === "low" || input.value === "medium" || input.value === "high") {
                    console.log("PRIORITY ============");
                    // console.log(noteValues);
                    this.borderColor(input.value, noteCard)
                    const selectMenu = noteCard.querySelector(".note-priority")
                    console.log(selectMenu.options);
                    for(const option of selectMenu) {
                      if (option.value === input.value) {
                        option.setAttribute("selected", true)
                      }
                    }
                  }
                  note.note.set(`${input.name}`, input.value)
                }
            })
        }
      })
    }
    deleteBtn(note, noteCard, project) {
      const deleteBtn = noteCard.querySelector(".card #note-cancel")
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", (e) => {
          e.preventDefault()
          console.log("DELETE ==========");
          note.displayed = false
          const projectNotes = project.notes
          let i = projectNotes.indexOf(note)
          projectNotes.splice(i, 1)
          noteCard.remove()
        })
      }
      borderColor(val, card) {
        switch (val) {
          case "low":
            card.style.borderColor = "var(--teal-3)"
            break;
          case "medium":
            card.style.borderColor = "var(--yellow-3)"
            break;
          case "high":
            card.style.borderColor = "var(--red-3)"
          default:
            break;
        }
      }
}