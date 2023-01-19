const indexCarContainer = document.querySelector('#index-car-container')
const messageContainer = document.querySelector('#message-container')
const showCarContainer = document.querySelector('#show-car-container')

export const onIndexCarContainer = (cars) => {
    cars.forEach(car => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${car.make}  ${car.model}</h3>
            <button data-id="${car._id}">Show Car</button>

        `

        indexCarContainer.appendChild(div)
    })
}


export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `

}

export const onCreateCarSuccess = () => {
    messageContainer.innerText = 'You created a car!! :)'
}


export const onShowCarSuccess = (character) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${character.firstName} ${character.lastName}</h3>
        <p>${character.class}</p>
        <p>${character._id}</p>
    `
    showCarContainer.appendChild(div)
}