export const indexCar = () => {
    return fetch(`http://localhost:8001/cars`)
}


export const createCar = (data) => {
    return fetch(`http://localhost:8001/cars`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


export const showCar = (id) => {
    return fetch(`http://localhost:8001/cars/${id}`)
}