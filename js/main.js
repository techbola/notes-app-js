import NotesView from './NotesView.js';
import NotesApi from './NotesApi.js';

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteSelect(id) {
        console.log("Note has been selected!");
        console.log(id)
    },
    onNoteAdd() {
        console.log("Let's add a new note!");
    },
    onNoteEdit(newTitle, newBody) {
        console.log("Editing note!");
        console.log(newTitle)
        console.log(newBody)
    },
    onNoteDelete(id) {
        console.log("Delete note");
        console.log(id);
    }
});

view.updateNoteList(NotesApi.getAllNotes());

// NotesApi.deleteNote(890433);

// NotesApi.saveNote({
//     id: 890433,
//     title: "New Note Updated",
//     body: "I am a new note changed."
// });

// console.log(NotesApi.getAllNotes())