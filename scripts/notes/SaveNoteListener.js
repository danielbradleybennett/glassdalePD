import {saveNote} from "./noteDataProvider.js"

const eventHub = document.querySelector(".container")
export const NoteEventComponent = () => {

  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "saveNote") {
        const criminalName = document.querySelector("#criminalName").value;
        const criminalNote = document.querySelector("#crimeNotes").value;
        
        // Date - maybe screwing up code 
        let date = Date.now()
        console.log(date, "this is the date")
        


          // Make a new object representation of a note
          const newNote = { 
            criminalName: criminalName,
            crimeNotes: criminalNote,
            dateLogged: date
            

            
              // Key/value pairs here
          }





          // Change API state and application state
          saveNote(newNote)
      }
  })
}
  // rest of the code here