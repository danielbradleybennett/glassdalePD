import { useWitness } from "./witnessDataProvider.js"
import { WitnessComponent } from "./witness.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessListContainer")





export const WitnessListComponent = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitness") {
      
      let witnessListCheck = false 
      
      if (document.querySelector(".witnessListContainer").innerHTML === "") {
        
        const witnessArray = useWitness()
        console.log(witnessArray)
        render(witnessArray)
        witnessListCheck = true 
      }
      else {
        if (document.querySelector(".witnessListContainer").innerHTML = "") {
          
          
        }
        
      }
      const message = new CustomEvent("witnessButtonClicked", {
        detail:{
          isTheWitnessListThere: witnessListCheck
        }
      })
      eventHub.dispatchEvent(message)
    }
    
    
  })
  
  let render = (witnessArray) => {
    
    contentTarget.innerHTML =
    `${witnessArray.map(taco__one => { return WitnessComponent(taco__one) }).join(" ")}`
    
    
  }
  
  
  
}


// export const HideCriminal = () => {
  
//   eventHub.addEventListener("click", clickEvent => {
//       if (clickEvent.target.id ==="showWitness") {
      
//           let container = document.getElementById("criminal__Container")
//           container.innerHTML = ""}
    

 
  
   
//   } )
// }

