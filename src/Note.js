import { Project } from "./Projects";

export default class Note extends Project {
  constructor(note) {
    super()
    this.notes = note
  }
  get note() {
    console.log("TEST IN NOTE");
    return this._notes
  }
  set note(notes) {
    console.log(notes);
    console.log(this);
    this._notes = this.pushNotes(notes)
  }
}