const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__button")

let crime = null
let officer = null

const FilterButton = () => {

    eventHub.addEventListener("crimeSelected", event => {
        crime = event.detail.crime
    })

    eventHub.addEventListener("officerSelected", event => {
        officer = event.detail.officerName
        console.log(officer)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "filterButton") {
            // Build a custom event
            const message = new CustomEvent("filterClicked", {
                detail: {
                    officer: officer,
                    crime: crime
                }
            })

            // Dispatch it
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `<button id="filterButton">Filter</button>`
    }

    render()
}

export default FilterButton