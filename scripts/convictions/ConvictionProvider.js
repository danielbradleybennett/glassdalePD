/* provides conviction data */


let convictions = []

export const useConvictions = () => {
    return convictions
}

export const getConvictions = () => {
    return fetch("http://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.log(parsedConvictions)
                convictions = parsedConvictions.slice()
            }
        )
}

