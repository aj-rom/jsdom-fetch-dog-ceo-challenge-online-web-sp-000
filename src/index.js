document.addEventListener("DOMContentLoaded", e => {

    function fetchDogImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

        return fetch(imgUrl)
            .then(resp => resp.json())
            .then(dogs => renderDogImages(dogs["message"]))
    }

    function renderDogImages(dogs) {
        const main = document.getElementById('dog-image-container')
        dogs.forEach(dog => {
            let img = document.createElement("img")
            img.src = dog
            main.appendChild(img)
        })
    }

    function fetchDogBreeds() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'

        return fetch(breedUrl)
            .then(resp => resp.json())
            .then(breeds => renderDogBreeds(breeds["message"]))
    }

    function renderDogBreeds(breeds) {
        const breedDropdown = document.getElementById("dog-breeds")
        Object.keys(breeds).forEach(b => {
            let option = document.createElement("li")
            option.textContent = b
            breedDropdown.appendChild(option)
        })
    }

    fetchDogImages()
    fetchDogBreeds()

    function breedClickListener() {
        const main = document.getElementById('dog-breeds')

        main.querySelectorAll("li").forEach(li => {
            li.addEventListener("click", e => {
                console.log('test')
            })
        })
    }

    breedClickListener()
})