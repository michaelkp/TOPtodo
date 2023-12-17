import { makeNewProject, displayProjects, deleteProject } from ".";
export let isProjectActive = false
export let activeProject

export function setActiveProject(project) {
  console.log(project);
  if (project === undefined || project.name === undefined) {
    console.log(project);
    return project = defaultProject
  } else {
    console.log(project);
    return activeProject = project
  }
}

export class Project {
  constructor(name, notes) {
    this.name = name,
    this.notes = [],
    this.isActive = isProjectActive = true
    this.pushProject()    
    this.display()
    this.activeProject = activeProject
  }
  display() {
    displayProjects(this)
  }
  pushProject() {
    addProjectToArray(this)
    if (isProjectActive = true) {
      console.log("PROJECT IS ACTIVE");
      return
    } else {
      console.log("PUSH TO PROJECT ARRAY");
    }  
  }
  pushNotes(note) {
    console.log(note);
    console.log(activeProject);
    if (activeProject === undefined) {
      console.log("active projet");
      activeProject = defaultProject;
    } 
    activeProject.notes.push(note)
    console.log(activeProject);
  }
}
export const projectsArray = []
export function addProjectToArray(project) {
  projectsArray.push(project)
}

export const defaultProject = new Project("Default")