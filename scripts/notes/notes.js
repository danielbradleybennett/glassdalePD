const NoteComponent = (noteObject) => {
  
  // Note components that are to be rendered to HTML.
  
  return ` 
     
  <div class ="note__card">
  
    <div>Name: ${noteObject.criminalName}</div>
    <div>Notes: ${noteObject.crimeNotes}</div>
    <div>Date: ${noteObject.dateLogged}</div>
    <button id="deleteNote--${noteObject.id}">Delete</button>
    

    

  </div>
  <br>

`

}

export default NoteComponent