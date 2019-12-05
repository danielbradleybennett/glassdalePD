import {useCriminals} from "./CriminalDataProvider.js"

import CriminalComponent from "./Criminal.js"

const CriminalListComponent = () => {
  const contentElement = document.querySelector(".criminalsContainer")
  const criminals = useCriminals()

  let allCriminalHTML = " "
  for (const criminal of criminals ) {
  const criminalHTML = CriminalComponent(criminal)
  allCriminalHTML += criminalHTML


}

contentElement.innerHTML += `
  ${allCriminalHTML}

`
}
export default CriminalListComponent
console.log("criminal list")