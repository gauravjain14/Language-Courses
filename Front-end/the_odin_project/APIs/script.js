const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=API_KEY&s=dogsandcats', {
    mode: 'cors'
}).then(function(response) {
    // Successful response :)
    return response.json();
}).then(function(data) {
    // Successful response :)
    img.src = data.data.images.original.url;
}).catch(function(err) {
    // Error :(
    console.log(err);
});

async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=API_KEY&s=dogsandcats', {
        mode: 'cors'
    });
    const data = await response.json();
    img.src = data.data.images.original.url;
}

getCats();