import { Project } from "./Projects";
import { format } from "date-fns";
let counter = 0
export default class Note {
  constructor(note, name) {
    // super()
    this.note = new FormData(note),
    // this.noteArray = [],
    this.id = counter++,
    this.date = this._date
    // this.push(this.note)
    // this._push = this.notes.push(this.note)
  }
  // get id() {
  //   return this._id 
  // }
  // set id(id) {
  //   console.log(id++);
  //   return this._id = id++

  //   // return this._id
  // }
  // push(note) {
  //   console.log("TEST IN NOTE");
  //   this.noteArray.push(this.note)
  //   // return this._push
  // }
  // set push(notes) {
  //   console.log("PUSH ===========");
  //   console.log(notes);
  //   console.log(this);
  //   this._push = this.noteArray.push(notes)
  // }
  get date() {
    return this._date
  }
  set date(val) {
    console.log("DATE IN NOTE ========");
    console.log(val);
    val = format(new Date(), 'PPPpp')
    console.log(val);
    // console.log(this.note.set("date", val));
    // console.log(this.note.get("date"));
    this.note.set("date", val)
    this._date = val
  }
}