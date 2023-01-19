import { indexCar, createCar, showCar} from "./api.js"
import { onIndexCarContainer,
         onFailure,
         onCreateCarSuccess,
         onShowCarSuccess,
          } from "./ui.js"
          

const createCarForm = document.querySelector('#create-car-form')

const indexCarContainer = document.querySelector('#index-car-container')

indexCar()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexCarContainer(res.cars)
    })
    .catch(onFailure)

createCarForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const carData = {
        car: {
            make: event.target['make'].value,
            model: event.target['model'].value,
            year: event.target['year'].value,
        },
    }
    //console.log(characterData)
    createCar(carData)
        .then(onCreateCarSuccess)
        .catch(onFailure)

})

indexCarContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    //console.log(id)
    showCar(id)
        .then((res) => res.json())
        .then((res) => onShowCarSuccess(res.car))
        .catch(onFailure)

})
