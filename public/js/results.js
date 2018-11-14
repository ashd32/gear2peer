(function () {
    // here we parse the the window replace from app.js then create a variable called search term which parses the url
    // and saves the term after ?q= which is the user input which lets us make the api call for the data
    const searchParams = (new URL(window.location)).searchParams;
    const searchTerm = searchParams.get("q") || "";

    // render function to display data
    const render = function (gear) {
        for (let i = 0; i < gear.length; i++) {
            $('#resultsPhotoGal').append(`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${gear[i].photoURL}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${gear[i].name}</h5>
                <p class="card-text"><h6>${gear[i].price}</h6></p>

            </div>`);
        };
    };

    const searchGear = function () {
        // took out event
        console.log('i am here!')

        //AP: $.get doesn't work with the slim version of jQuery in html in line 193
        $.get(`/api/products/${searchTerm}`)
            .then(function (gear) {
                console.log(gear);
                render(gear);
            })
    };

    searchGear();
})();