import { useNotes } from "./noteDataProvider.js";
import NoteComponent from "./notes.js"
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteListContainer")




export const NoteListComponent = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {

      if(document.querySelector(".noteListContainer").innerHTML === "")
        {const notesArray = useNotes()
        render(notesArray)}
      else{
        document.querySelector(".noteListContainer").innerHTML = ""
      }
    }


  })

  let render = (notesArray) => {
    contentElement.innerHTML =
      `${notesArray.map(taco => { return NoteComponent(taco) }).join(" ")}`


  }


}

