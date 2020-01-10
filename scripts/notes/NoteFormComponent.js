import {useNotes, saveNote, editNote} from "./noteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")



export const NoteFormComponent = () => {

  eventHub.addEventListener("editButtonClicked", event => {
    const noteToBeEdited = event.detail.noteId

    const allNotesArray = useNotes()
debugger
    const theFoundedNote = allNotesArray.find(
      (currentNoteObject) => {
        return currentNoteObject.id === parseInt(noteToBeEdited, 10)

      }
    )
    document.querySelector("#criminal-name").value = theFoundedNote.suspect
    document.querySelector("#criminal-notes").value = theFoundedNote.notes
    document.querySelector("#note-id").value = theFoundedNote.id
  })


  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
      

      const message = new CustomEvent("showNoteButtonClicked")
      
      eventHub.dispatchEvent(message)




    }
  })




  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveNote") {
      // Does the hidden input field have a value?
      const hiddenInputValue = document.querySelector("#note-id").value

      if (hiddenInputValue !== "") {
        const editedNote = {
          id: parseInt(document.querySelector("#note-id").value, 10),
          notes: document.querySelector("#criminal-notes").value,
          suspect: document.querySelector("#criminal-name").value,
          date: Date.now()
        }

        editNote(editedNote).then(() => {
          eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
        })
      } else {

         // Make a new object representation of a note
        const newNote = {
          suspect: document.querySelector("#criminal-name").value,
          notes: document.querySelector("#criminal-notes").value,
          date: Date.now()
        }


        // Key/value pairs here



        // Change API state and application state
        saveNote(newNote).then(() => {
          const message = new CustomEvent("noteCreated")
          eventHub.dispatchEvent(message)
        })
      }
    }
  })

  const render = () => {
      contentTarget.innerHTML = `
          
      <section>Criminal Name</section>
  
          <input type="hidden" id="note-id"
  
          <div>
              <input type="text" id="criminal-name">
          </div>
  
      <section>Crime Notes</section>
          <div>
              <input type="text" id="criminal-notes">
          </div>
          
          <button id="saveNote">Save Note</button>
          <button id="showNotes">Show Notes</button>
          <button id="showWitness">Witnesses</button>
          
  
  
      `
  }
  
  render()
}

//event listener inside of the note form component that listens for the show notes button to be clicked
//that event listener will emit a custom event something like 'showNotesButtonClicked'
//in the NOTE LIST component, listen for the showNotesButtonClicked custom event, depending on the state of the div, fill it in or empty it out
//have that event listener emit a custom event something like 'stateOfTheNotesDivChanged', make sure to send along the true or false variable indicating if the note list is being added or removed 
//in the criminal list component, listen for the stateOfTheNotesDivChanged, look at variable sent on event.detail, if its true/false remove the criminal list or add it 






  