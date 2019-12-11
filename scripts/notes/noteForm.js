const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
            
        <section>Criminal Name</section>
            <div>
                <input type="text" id="criminalName">
            </div>

        <section>Crime Notes</section>
            <div>
                <input type="text" id="crimeNotes">
            </div>
            
            <button id="saveNote">Save Note</button>
            <button id="showNotes">Show Notes</button>
        `
    }

    render()
}

export default NoteFormComponent