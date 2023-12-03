import { makeNewProject } from ".";
let isProjectActive = false
console.log("IS ACTIVE PROJECT? -- " , isProjectActive)
let activeProjectName
console.log("ACTIVE PROJECT NAME -- ", activeProjectName);

export class Project {
  constructor(name, notes) {
    this.name = name,
    this.notes = notes,
    this.display = this.displayNewProjectName(name),
    this.isActive = isProjectActive = true,
    this.activeProjectName = activeProjectName = name
  }
  get pushNotes() {
    return this.notes
  }
  set pushNotes(note) {
    const notes = []
    notes.push(note)
  }

  displayNewProjectName(name) {
    const getProjectList = document.querySelector(".project-container")
    //Get Project card template
    const getProjectTemplate = document.querySelector(".new-project")
    const cloneProjectTemplate = getProjectTemplate.content.cloneNode(true)
    const getProjectName = cloneProjectTemplate.querySelector('.project-name')
    getProjectName.textContent = name
    getProjectList.appendChild(cloneProjectTemplate)
    attachListenerToProjectName(getProjectName)
  }
}

const testProject1 = new Project("test1", "test notes")
console.log(testProject1.name, testProject1.notes, testProject1.isActive);

function attachListenerToProjectName(project) {
  project.addEventListener("click", () => {
    // ADD SORTING FUINCTION FOR NOTES
    isProjectActive = true
    console.log("attch is project active -- ", isProjectActive);
    activeProjectName = project.textContent
    console.log("attch active project name -- ", activeProjectName);
    console.log('PROJECT', `${project.textContent}`);
  })
}