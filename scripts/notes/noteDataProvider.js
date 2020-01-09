
// write a fetch call for getting the notes
let notes = []

export const useNotes = () => {
  return notes

}

export const saveNote = note => {
 return fetch('http://localhost:8088/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
      .then(response => response.json())
      .then(
          parsedNotes => {
              
              notes = parsedNotes.slice()
          }
      )
}

export const deleteNote = noteId => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
      method: "DELETE"
  })
      .then(getNotes)
}

export const editNote = (noteObject) => {
  return fetch(`http://localhost:8088/notes/${noteObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(noteObject)
  })
    .then(getNotes)
}