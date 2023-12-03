import { Project } from "./Projects";

export default class Note extends Project {
  getNote(note) {
    this.notes = Project.notes.push(note)
  }
}