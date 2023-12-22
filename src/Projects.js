import { makeNewProject, displayProjects, deleteProject } from ".";
import { Card } from "./Card";
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
  constructor(name) {
    this.name = name,
    this.notes = [],
    this.isActive = isProjectActive = true,
    this.pushProject(),    
    this.display(),
    // this.displayNote(this.notes),
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
  push(note) {
    console.log("PUSH ===============");
    console.log(note);
    console.log(note.note);
    // console.log(activeProject);
    if (activeProject === undefined) {
      console.log("active projet");
      activeProject = defaultProject;
    } 
    this.notes.push(note)
    // console.log(activeProject);
  }
  // displayNote(notes) {
  //   console.log("DISPLAY NOTE =============");
  //   console.log(notes);
  //   for (let i = 0; i <= notes.length; i++) {
  //     console.log(notes[i]);
  //     // const sendNoteToCard = new Card(notes[i])
  //   }
  // }
}
export const projectsArray = []
export function addProjectToArray(project) {
  projectsArray.push(project)
}

export const defaultProject = new Project("Default")