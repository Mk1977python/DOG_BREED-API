console.log("coneccted");
/*API
/*
 * https://dog.ceo/api/breed/hound/list
 * https://dog.ceo/api/breed/{breed}]/images/random
 */

function getDogsBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then((res) => res.json())
        .then(data => Object.keys(data.message))
        .catch(err => console.log(err));
}



function renderoption() {
    getDogsBreed().then(breeds => {
        for (let breed of breeds) {
            console.log(breed);
        }
    })
}
renderoption();