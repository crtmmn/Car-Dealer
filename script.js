const brandsDict = {}

function adding() {
    let brand = document.getElementById("brand").value

    if (brandsDict[brand]) {
        addNextCar()
    } else {
        addFirstCar()
    }
}

function addFirstCar() {
    let carsDiv = document.getElementById("cars")
    let brand = document.getElementById("brand").value
    let newBrandDiv = document.createElement("div")
    newBrandDiv.id = brand
    brandsDict[brand] = 1

    newBrandDiv.innerHTML = "<h2>" + brand + "</h2>"
    carsDiv.appendChild(newBrandDiv)

    let newCarDiv = document.createElement("div")
    let model = document.getElementById("model").value
    let year = document.getElementById("year").value
    let price = document.getElementById("price").value
    delButton = document.createElement('button')
    delButton.id = brandsDict[brand]
    delButton.innerHTML = "Delete car"
    delButton.addEventListener('click', deleteCar)
    newCarDiv.innerHTML = brand + " | " + model + " | " + year + " | " + price + " | " + brandsDict[brand] + " | "
    newCarDiv.id = brandsDict[brand]
    newCarDiv.appendChild(delButton)
    newBrandDiv.appendChild(newCarDiv)
}

function addNextCar() {
    let brand = document.getElementById("brand").value
    let model = document.getElementById("model").value
    let year = document.getElementById("year").value
    let price = document.getElementById("price").value
    let newCarDiv = document.createElement("div")
    brandsDict[brand] += 1
    delButton = document.createElement('button')
    delButton.id = brandsDict[brand]
    delButton.innerHTML = "Delete car"
    delButton.addEventListener('click', deleteCar)
    newCarDiv.innerHTML = brand + " | " + model + " | " + year + " | " + price + " | " + brandsDict[brand] + " | "
    newCarDiv.id = brandsDict[brand]
    newCarDiv.appendChild(delButton)

    document.getElementById(brand).appendChild(newCarDiv)
}

function deleteCar(e) {
    let carDiv = e.target.parentNode
    let brandDiv = carDiv.parentNode
    let brand = brandDiv.id


    if(brandsDict[brand] == e.target.id) {
        brandsDict[brand] -= 1
    }

    carDiv.remove()

    if(brandDiv.innerHTML == "<h2>" + brand + "</h2>") {
        brandsDict[brand] = 0
        brandDiv.remove()
    }
}