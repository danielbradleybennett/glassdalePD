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
  
if (matchingCriminals.length >0) {render(matchingCriminals)}
else {render(criminalCollection)}


  })


  
  
let render = criminalCollection => {
  contentElement.innerHTML = `
      ${criminalCollection.map(currentCriminal => {
    return CriminalComponent(currentCriminal)}).join(" ")}`

      }
    render(criminalCollection)
    }

  
export default CriminalListComponent