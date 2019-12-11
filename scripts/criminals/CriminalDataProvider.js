let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.log(parsedCriminals)
                criminals = parsedCriminals.slice()
            }
        )
}

console.log("criminal data")

