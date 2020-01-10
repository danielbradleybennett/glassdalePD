let officers = []

export const useOfficers = () => {
    return officers
}

export const getOfficers = () => {
    return fetch("http://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.log(parsedOfficers)
                officers = parsedOfficers.slice()
            }
        )
}