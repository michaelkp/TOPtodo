import { Project } from "./Projects";
import { format } from "date-fns";
let counter = 0
export default class Note {
  constructor(note, name) {
    // super()
    this.note = new FormData(note),
    this.id = counter++,
    this.date = this._date,
    this.displayed = false
  }
  get date() {
    return this._date
  }
  set date(val) {
    console.log("DATE IN NOTE ========");
    val = format(new Date(), 'PPPpp')
    this.note.set("date", val)
    this._date = val
  }
}