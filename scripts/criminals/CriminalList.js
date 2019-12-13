import { useCriminals } from "./CriminalDataProvider.js"
import CriminalComponent from "./Criminal.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")




const CriminalListComponent = () => {
   const criminalCollection = useCriminals();
  

  eventHub.addEventListener("crimeSelected", event => {
    const crime = event.detail.crime
    console.log(crime)

  const matchingCriminals = criminalCollection.filter((currentCriminal) => {

    if (currentCriminal.conviction === crime){
    return currentCriminal}
  
  
})
  
// Show Selected Crimes back to Show all Criminals

if (matchingCriminals.length >0) {render(matchingCriminals)}
else {render(criminalCollection)}


  })

eventHub.addEventListener("witnessButtonClicked", (evt) => {
  //if the container that holds the witnesses is empty
  //fill up the the criminals container using the render function 
  //otherwise empty the criminals container 


  // ** What MO would suggest **
  //if event.detail.isTheWitnessListThere === true 
  // clear out the criminal list 

  if (event.detail.isTheWitnessListThere === true) {
    document.querySelector(".criminalsContainer").innerHTML = ""
  } 
  else { render(criminalCollection)}


  //document.queryselector(".WhateverMyCriminalListIs").innerhtml = ""
  
  //otherwise render the criminal list 
  
})

  // Listens for button to be clicked. 


  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
      console.log(event.detail.criminalId)


      const [prefix, id] = clickEvent.target.id.split("--")

            const message = new CustomEvent("associateButtonClicked", {
                detail: {
                    criminalId: id
                }

                
              })
              eventHub.dispatchEvent(message)
            }
                else if (clickEvent.target.id.startsWith("closeDialog")) {
                  const alibis = clickEvent.target.parentNode
                  alibis.close()
                }
    })

  // Render Criminal Collection
  
let render = criminalCollection => {
  contentElement.innerHTML = `
      ${criminalCollection.map(currentCriminal => {
    return CriminalComponent(currentCriminal)}).join(" ")}`

      }
    render(criminalCollection)
    }

 
export default CriminalListComponent