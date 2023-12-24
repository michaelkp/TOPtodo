import { Project } from "./Projects";
import { format } from "date-fns";
let counter = 0
export default class Note {
  constructor(note, name) {
    // super()
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
    console.log(val);
    const priorityOption = document.querySelector(".note-priority")
    console.log(priorityOption.option);
    // priorityOption.selectedOptions.filter(selected => {
    //   console.log(selected);
    // })
    val = priorityOption.value
    // val.setAttribute("selected")
    return this._priority = val
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