import { makeNewProject } from ".";

export class Project {
  constructor(name, notes) {
    this.name = name,
    this.notes = [],
    this.display = this.displayNewProjectName()
  }
  displayNewProjectName(name) {
    const getProjectList = document.querySelector(".project-names")
    const newProjectSpan = document.createElement('span')
    newProjectSpan.textContent = `${this.name}`
    getProjectList.appendChild(newProjectSpan)
  }
}

// export function makeNewProject() {
//   console.log(getProjectName);
//   displayNewProjectName(getProjectName)
// }
// function displayNewProjectName(projectName) {
//   console.log(projectName);
// }