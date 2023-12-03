import './style.css'
import { Project } from './Projects';
import { Card } from './Card';

console.log('hi');
const getNoteFormTemplate = document.querySelector(".note-form-template")
const cloneNoteForm = getNoteFormTemplate.content.cloneNode(true)
const getNoteContainer = document.querySelector(".note-form-container")
getNoteContainer.append(cloneNoteForm)
const saveNoteBtn = document.querySelector("button[id = note-save]")
saveNoteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  getNoteData()
  console.log("Save note Button");
  const noteForm = document.querySelector("#note-form")
  noteForm.reset()
})

const newProjectBtn = document.querySelector("button[class = new-project-btn]")
newProjectBtn.addEventListener('click', (e) => {
  const projectForm = document.querySelector("#new-project-form")
  const projectName = document.querySelector("#new-project-input").value
  const newProject = new Project(projectName)
  projectForm.reset()
})

export function getNoteData() {
  const noteData = {
    title: document.getElementById("note-title").value,
    content: document.getElementById("note-content").value,
    tags: document.getElementById("note-tags").value,
    date: document.getElementById("note-date").value,
    color: document.getElementById("note-color").value
  }
  const noteCard = new Card(noteData)
  
}
function displayNoteInCard(note) {
  const newNoteCard = new Card(note)
}

function sendNoteToStorage() {

}
