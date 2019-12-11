
// write a fetch call for getting the notes
let notes = []

export const useNotes = () => {
  return notes

}


export const saveNote = note => {
  fetch('http://localhost:8080/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}

export const getNotes = () => {
  return fetch("http://localhost:8080/notes")
      .then(response => response.json())
      .then(
          parsedNotes => {
              console.log(parsedNotes)
              notes = parsedNotes.slice()
          }
      )
}