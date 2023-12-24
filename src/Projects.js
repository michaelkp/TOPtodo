import { displayProjects } from ".";
export let isProjectActive = false
export let activeProject

export function setActiveProject(project) {
  if (project === undefined || project.name === undefined) {
    return project = defaultProject
  } else {
    return activeProject = project
  }
}
export class Project {
  constructor(name) {
    this.name = name,
    this.notes = [],
    this.isActive = isProjectActive = true,
    this.pushProject(),    
    this.display(),
    this.activeProject = activeProject
  }
  display() {
    displayProjects(this)
  }
  pushProject() {
    addProjectToArray(this)
  }
  push(note) {
    if (activeProject === undefined) {
      activeProject = defaultProject;
    } 
    this.notes.push(note)
  }
}
export const projectsArray = []
export function addProjectToArray(project) {
  projectsArray.push(project)
}

export const defaultProject = new Project("Default")