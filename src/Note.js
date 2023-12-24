import { format } from "date-fns";

let counter = 0
export default class Note {
  constructor(note) {
    this.note = new FormData(note),
    this.priority = this._priority,
    this.id = counter++,
    this.date = this._date,
    this.displayed = false
  }
  get priority() {
    return this._priority
  }
  set priority(val) {
    const priorityOption = document.querySelector(".note-priority")
    val = priorityOption.value
    return this._priority = val
  }
  get date() {
    return this._date
  }
  set date(val) {
    val = format(new Date(), 'PPPpp')
    this.note.set("date", val)
    this._date = val
  }
}