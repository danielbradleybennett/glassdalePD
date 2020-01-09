import { useNotes } from "./noteDataProvider.js"
import { deleteNote } from "./noteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteListContainer")


// Listens for the show button to click. When the button is clicked it will display the current notes in the API. 
// If the button is clicked again, the notes will disappear. 

export const NoteListComponent = () => {

  eventHub.addEventListener("noteHasBeenEdited", event => {
    const updatedNotes = useNotes()
    render(updatedNotes)

  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editNote--")) {console.log("do you hear me")
      const [deletePrefix, noteId] = clickEvent.target.id.split("--")

      const editEvent = new CustomEvent("editButtonClicked", {
        detail: {
          noteId: noteId
        }
      })

      eventHub.dispatchEvent(editEvent)
    }

      if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.
 
            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
        deleteNote(id).then(
          () => {
            const NewNotes = useNotes()
            render(NewNotes)
          }
        )
      }
    }
    )

    const renderNotesAgain = () => {
      const allTheNotes = useNotes()
      render(allTheNotes)
    }

    eventHub.addEventListener("noteCreated", event => {
      if(document.querySelector(".noteListContainer").innerHTML !== "")
      {renderNotesAgain()}

    })

    eventHub.addEventListener("showNoteButtonClicked", event => {  
      let isTheNoteListThere = false   
      if (document.querySelector(".noteListContainer").innerHTML === "") {
        

        const noteArray = useNotes()
        console.log(noteArray)
        render(noteArray)
        isTheNoteListThere = true 

        
      }
      else {
        document.querySelector(".noteListContainer").innerHTML = ""
        
      }
      
      const message = new CustomEvent("emptyCriminalContainer", {
        detail:{
          isTheNoteListThere: isTheNoteListThere
        }
      })
      eventHub.dispatchEvent(message)



    })


    const render = (notesCollection) => {
      contentTarget.innerHTML = notesCollection.map(
        (noteObject) => {
          // Note components that are to be rendered to HTML.

          return ` 
       
    <div class ="note__card">
    
      <div>Name: ${noteObject.suspect}</div>
      <div>Notes: ${noteObject.notes}</div>
      <div>Date: ${noteObject.date}</div>
  
  
      <button id="deleteNote--${noteObject.id}">Delete</button>
      <button id="editNote--${noteObject.id}">Edit</button>
      
  
      
  
    </div>
    <br>
  
  `}
  ).join("")
}

}




