const NoteComponent = (note) => {
  return ` 
     
  <div class ="note__card">
  
    <div>Name: ${note.criminalName}</div>
    <div>Notes: ${note.crimeNotes}</div>
    <div>Date: ${note.dateLogged}</div>
    

    

  </div>
  <br>

`

}

export default NoteComponent