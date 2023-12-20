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
  getNoteContainer.append(cloneNoteForm)

saveNoteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  //getNoteData()
  const project = setActiveProject()
  console.log(project);
  console.log("Save note Button");
  const noteForm = document.querySelector("#note-form")
  console.log(noteForm);
  const noteFormData = new Note(noteForm)
  console.log(noteFormData);
  project.pushNotes(noteFormData)
  // const newNote = new Note(noteFormData)
  displayNoteInCard(noteFormData, project)
  noteForm.reset()
})
cancelBtn.addEventListener("click", () => {
  console.log("Cancel Button");
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
      console.log(newProject.name);
      setActiveProject(newProject)
    }
    projectForm.reset()
  })
export function displayProjects(project) {
  console.log(project);
  if (project.name === undefined || project.name === '') return
  const getProjectList = document.querySelector(".project-container")
  //Get Project card template
  const getProjectTemplate = document.querySelector(".new-project")
  const projectCard = getProjectTemplate.content.firstElementChild.cloneNode(true) 
  console.log(projectCard);
  const getProjectName = projectCard.querySelector('.project-name')
  //console.log(project);
  getProjectName.textContent = project.name
  projectCard.id = project.name
  console.log(projectCard);
  getProjectName.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e, "SET ACTIVE PROJECT");
    setActiveProject(project)
    console.log(project.notes);
    if (project.notes.length === 0) {
      console.log("NO NOTES");
      return
    } else {
      console.log("NOTES!", project.name);
      console.log("NOTES -- ", project.name, project.notes);
      displayNoteInCard(project.notes, project.name)
    }
  })
  getProjectList.appendChild(projectCard)
  //sortDisplayedProjects(project)
  deleteProject(project, projectCard)
  //return { project, projectCard }
}
function sortDisplayedProjects(project) {
  console.log("SORT =====");
  console.log(project);
  const card = document.getElementsByClassName("card")
  console.log(card);
}
export function deleteProject(project, projectCard) {
  const deleteBtn = projectCard.querySelector(".delete-project-btn")
  deleteBtn.addEventListener("click", () => {
    const index = projectsArray.indexOf(project)
    projectsArray.splice(index, 1)
    projectCard.remove()
  })
}

function displayNoteInCard(note, project) {
  console.log(note);
  console.log(project);
  const newNoteCard = new Card(note, project)
}

function sendNoteToStorage() {

}
