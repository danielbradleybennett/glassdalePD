const CriminalComponent = (criminal) => {
  return ` 
     
  <div class ="criminal__card">
  
    <div>Name: ${criminal.name}</div>
    <div>Age: ${criminal.age}</div>
    <div>Conviction: ${criminal.conviction}</div>
    <div>Incarceration Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
    <div>Incarceration End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    <button id="associates--${criminal.id}">Associate Alibis</button>

    

  </div>
  <br>


`

}
console.log("Criminal Components")
export default CriminalComponent