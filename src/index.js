import './style.css'
console.log('hi');
const saveNoteBtn = document.querySelector("button[id = note-save]")
saveNoteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  getNotedata()
})
function getNotedata() {
  const noteForm = document.getElementById('note-form')
  const noteData = {
    title: document.getElementById("note-title").value,
    content: document.getElementById("note-content").value,
    tags: document.getElementById("note-tags").value,
    date: document.getElementById("note-date").value,
    color: document.getElementById("note-color").value
  }
  console.log(noteData);
}
