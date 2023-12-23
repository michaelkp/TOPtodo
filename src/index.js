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
export function addProjectToSelectMenu(project) {
    console.log(selectProject);
    const option = document.createElement("option")
    selectProject.appendChild(option)
    option.textContent = `${project.name}`
    const optionList = selectProject.querySelectorAll("option")
    console.log(optionList);
    selectProject.addEventListener("change", () => {
      console.log("OPTION ======", option);
      option.setAttribute("selected", true)
      setActiveProject(option.value)
    })
    // optionList.forEach(option => {
    //   console.log(option.value);
    //   option.addEventListener("change", () => {
    //     console.log("OPTION ==========");
    //   })
    // })
}
  getNoteContainer.append(cloneNoteForm)

saveNoteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  //getNoteData()
  let project
  if (activeProject === undefined) {
    project = setActiveProject()
  } else{
    project = activeProject//setActiveProject()
  }
  console.log(project);
  console.log("Save note Button");
  const noteForm = document.querySelector("#note-form")
  console.log(noteForm);
  const noteFormData = new Note(noteForm)
  console.log(noteFormData);
  // console.log(project.push(noteFormData));
  project.push(noteFormData)
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
      console.log("ACTIVE PROJECT === ", activeProject);
      addProjectToSelectMenu(newProject)

    }
    projectForm.reset()
  })
export function displayProjects(project) {
  console.log("DISPLAY PROJECT =================");
  console.log(project);
  console.log(project.notes);

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
    console.log(project.name);
    setActiveProject(project)
    console.log("NOTES IN PROJECT");
    console.log(project.notes);
    if (project.notes.length === 0) {
      console.log("NO NOTES");
      return
    } else {
      console.log("NOTES!", project.name);
      console.log("NOTES -- ", project.name, project.notes);
      sortDisplayedProjects(project)
      // displayNoteInCard(project.notes, project.name)
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
  const cards = Array.from(document.getElementsByClassName("card"))
  console.log(cards);
  cards.forEach(card => card.remove())
  console.log(project);
  console.log(project.notes);
  console.log(project.notes);
  project.notes.forEach(note => {
    console.log(note);
    displayNoteInCard(note, project)
  })
  // displayNoteInCard(project.notes)
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
