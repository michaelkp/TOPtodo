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
    //this.display = this.displayNewProjectName(name),
    this.isActive = isProjectActive = true
    this.pushProject()
    
    //this.displayProject = displayProjects(this)
    this.display()
    this.delete()
    this.activeProject = activeProject
    //this.attachListenerToProjectName = this.attachListenerToProjectName(name)
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
  delete() {
    // console.log("DELTE PROJECT");
    // console.log(this);
    // // deleteProject(this)
    // const deleteProjectBtns = document.querySelectorAll(".delete-project-btn")
    // const getProjectContainer = document.querySelector(".project-container")
    // const card = document.querySelector(".new-project-card")
    // console.log(card);
    
    // deleteProjectBtns.forEach(btn => {
    //   btn.addEventListener("click", (e) => {
    //     console.log("DELETE");
    //     console.log(this.name);
    //     console.log(getProjectContainer);
    //     const projectCard = document.getElementById(`${this.name}`)
    //     projectCard.remove()
    //     console.log(projectCard);
    //     if (projectCard.id === this.name){
    //       console.log("REMOVE");
    //       // getProjectContainer.remove(projectCard)
    //     }
        
    //   })
    // })
  }
  // get pushNotes() {
  //   return this._notes
  // }
  // set pushNotes(note) {
  //   const notes = []
  //   console.log(note, notes );
  //   notes.push(note)
  // }

  // displayNewProjectName(name) {
  //   console.log(this.name, this.notes);
  //   const getProjectList = document.querySelector(".project-container")
  //   //Get Project card template
  //   const getProjectTemplate = document.querySelector(".new-project")
  //   const cloneProjectTemplate = getProjectTemplate.content.cloneNode(true)
  //   const getProjectName = cloneProjectTemplate.querySelector('.project-name')
  //   getProjectName.textContent = this.name
  //   console.log(Object.hasOwnProperty(name));
  //   getProjectList.appendChild(cloneProjectTemplate)
  //   this.attachListenerToProjectName(getProjectName)
  // }
  // attachListenerToProjectName(project) {
  //   console.log(project);
  //   project.addEventListener("click", () => {
  //     // ADD SORTING FUINCTION FOR NOTES
  //     console.log(project);
  //     isProjectActive = true
  //     console.log("attch is project active -- ", isProjectActive);
  //     //activeProjectName = project
  //     setActiveProjectName(project.textContent)
  //     console.log(Object.entries(project));
  //     console.log("attch active project name -- ", activeProjectName);
  //   })
  // }
}
export const projectsArray = []
export function addProjectToArray(project) {
  projectsArray.push(project)
}

export const defaultProject = new Project("Default")