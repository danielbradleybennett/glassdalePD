import { useNotes } from "./noteDataProvider.js"
import NoteComponent from "./notes.js"
import {deleteNote} from "./noteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteListContainer")


// Listens for the show button to click. When the button is clicked it will display the current notes in the API. 
// If the button is clicked again, the notes will disappear. 

export const NoteListComponent = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {

// If button is clicked & noteListContainer innerHTML is empty, will display notes. 

      if(document.querySelector(".noteListContainer").innerHTML === "")
        {const notesArray = useNotes()
        render(notesArray)}

// If nothing happens, then noteListContainer remains empty. 
        
      else{
        document.querySelector(".noteListContainer").innerHTML = ""
      }
    }

    const eventHub = document.querySelector(".container")
    
    eventHub.addEventListener("click", clickEvent => {
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
    })

  })

  // displays the notes

  let render = (notesArray) => {
    contentElement.innerHTML =
      `${notesArray.map(taco => { return NoteComponent(taco) }).join(" ")}`


  } }





