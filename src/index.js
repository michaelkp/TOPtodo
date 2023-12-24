import './style.css'
import { Project, isProjectActive, activeProject, setActiveProjectName, saveProjects, projectsArray, setActiveProject, defaultProject } from './Projects';
import { Card } from './Card';
import Note from './Note';

console.log('hi');
const getNoteFormTemplate = document.querySelector(".note-form-template")
const cloneNoteForm = getNoteFormTemplate.content.cloneNode(true)
const getPostedDateSpan = cloneNoteForm.querySelector(".posted-date-section")
  getPostedDateSpan.remove()
const getNoteContainer = document.querySelector(".note-form-container")
const saveNoteBtn = cloneNoteForm.querySelector("#note-save")
const cancelBtn = cloneNoteForm.querySelector("#note-cancel")
const selectProject = cloneNoteForm.querySelector("#note-projects")
const showAllNotesBtn = document.querySelector(".projects-all-notes")
showAllNotesBtn.addEventListener("click", () => {
  const cards = Array.from(document.getElementsByClassName("card"))
    cards.forEach(card => card.remove())
  projectsArray.forEach(project => {
    const notes = project.notes
    notes.forEach(note => {
        displayNoteInCard(note, project)
    })
  })
})
export function addProjectToSelectMenu(project) {
    const option = document.createElement("option")
    selectProject.appendChild(option)
    option.textContent = `${project.name}`
    const optionList = selectProject.querySelectorAll("option")
    selectProject.addEventListener("change", () => {
      option.setAttribute("selected", true)
      setActiveProject(option.value)
    })
}
  getNoteContainer.append(cloneNoteForm)

saveNoteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let project
  if (activeProject === undefined) {
    project = setActiveProject()
  } else{
    project = activeProject
  }
  const noteForm = document.querySelector("#note-form")
  const noteFormData = new Note(noteForm)
  project.push(noteFormData)
  displayNoteInCard(noteFormData, project)
  noteForm.reset()
})
cancelBtn.addEventListener("click", () => {
  const noteForm = document.querySelector("#note-form")
  noteForm.reset()
})
const newProjectBtn = document.querySelector("button[class = new-project-btn]")
  newProjectBtn.addEventListener('click', (e) => {
    const projectForm = document.querySelector("#new-project-form")
    const projectName = document.querySelector("#new-project-input").value
    if (projectName === undefined || projectName === ''){
      return
    } else {
      const newProject = new Project(projectName)
      setActiveProject(newProject)
      addProjectToSelectMenu(newProject)
    }
    projectForm.reset()
  })
export function displayProjects(project) {
  if (project.name === undefined || project.name === '') return
  const getProjectList = document.querySelector(".project-container")
  const getProjectTemplate = document.querySelector(".new-project")
  const projectCard = getProjectTemplate.content.firstElementChild.cloneNode(true) 
  const getProjectName = projectCard.querySelector('.project-name')
  getProjectName.textContent = project.name
  projectCard.id = project.name
  getProjectName.addEventListener("click", (e) => {
    e.preventDefault()
    setActiveProject(project)
    sortDisplayedProjects(project)
  })
  getProjectList.appendChild(projectCard)
  deleteProject(project, projectCard)
}
function sortDisplayedProjects(project) {
  const cards = Array.from(document.getElementsByClassName("card"))
  cards.forEach(card => card.remove())
  project.notes.forEach(note => {
    displayNoteInCard(note, project)
  })
}
export function deleteProject(project, projectCard) {
  const deleteBtn = projectCard.querySelector(".delete-project-btn")
  const deleteDialog = document.querySelector("dialog")
  deleteBtn.addEventListener("click", () => {
    deleteDialog.showModal()
    const cancelDialog = document.querySelector(".cancel-delete-project-btn")
      cancelDialog.addEventListener("click", () => {
        deleteDialog.close()
        return
      })
    const deleteProjectInDialog = document.querySelector(".delete-project-dialog-btn")
      deleteProjectInDialog.addEventListener("click", () => {
        deleteDialog.close()
        deleteProjectAfterDialog()
      })
    function deleteProjectAfterDialog() {
      const displayedNotes = document.querySelectorAll(".card")
      displayedNotes.forEach(note => {
        if(note.classList.contains(project.name)) {
          note.remove()
        }
      })
      const index = projectsArray.indexOf(project)
      projectsArray.splice(index, 1)
      projectCard.remove()
    }
  })
}

function displayNoteInCard(note, project) {
  const newNoteCard = new Card(note, project)
}

function sendNoteToStorage() {

}
