import { Project } from "./Projects";
import { format } from "date-fns";

export default class Note extends Project {
  constructor(note, name) {
    super()
    this.notes = new FormData(note),
    this.id = name
    this.date = this._date
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
  get date() {
    return this._date
  }
  set date(val) {
    console.log("DATE IN NOTE ========");
    console.log(val);
    val = format(new Date(), 'PPPpp')
    console.log(val);
    console.log(this.notes.set("date", val));
    console.log(this.notes.get("date"));
    this._date = this.notes.set("date", val)
  }
}