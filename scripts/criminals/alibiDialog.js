import { useCriminals } from "./CriminalDataProvider.js"
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")



// Listens for Dialog Button to be clicked. Displays information. 

export const DialogComponent = () => {

  eventHub.addEventListener("associateButtonClicked", event => {
  
   
     
    const criminals = useCriminals()

    const foundCriminal = criminals.find(
      (singleCriminal) => {
        return singleCriminal.id === parseInt(event.detail.criminalId, 10)

      }


    )
    
    const alibisHTML = foundCriminal.known_associates.map(
      (singleAssociate) => {
        return `
          <div>
            ${singleAssociate.name}: ${singleAssociate.alibi}
          </div>
        `

      }).join("")

      




    document.querySelector(".alibi__text").innerHTML = alibisHTML
    document.querySelector(".alibis").showModal()

    
  })




  const render = () => {
    contentTarget.innerHTML = `
      <dialog class="alibis">
        <div class="alibi__text"></div>
        <button id="closeDialog></button>
        <button class="button--close">Close Dialog</button>
        
      
      </dialog>
  
  `

  }

render()

}


const CloseButton = () => {



}