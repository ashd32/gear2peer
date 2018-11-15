(function () {
    // here we parse the the window replace from app.js then create a variable called search term which parses the url
    // and saves the term after ?q= which is the user input which lets us make the api call for the data
    const searchParams = (new URL(window.location)).searchParams;
    const searchTerm = searchParams.get("category") || "";

    // render function to display data
    const render = function (gear) {
        for (let i = 0; i < gear.length; i++) {
            $('#resultCard').append(`<div class = "col-md-12" >
            <div class="container py-3">
                <div class="card">
                    <div class="row ">
                        <div id="resultImg" class="col-md-4"><img style = "width: 100%;" src = ${gear[i].photoURL};>
                        </div>
                        <div class="col-md-8 px-3">
                            <div class="card-block px-3">
                                <div id="cardTitle" class="card-title"><h2>${gear[i].name}</h2></div>
                                <div id="cardText" class="card-text"><h3>$${gear[i].price}</h3></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div><hr><br>`);

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

     const displayItem = function (e) {
         e.preventDefault();
         const thisName = $(this).data('name')
         const thisPrice = $(this).data('price')

         console.log(thisName)
         console.log(thisPrice)

         $('#resultsPhotoGal').empty();

         $('#resultsPhotoGal').append(`<h1>${thisName}</h1><br /><h3>${thisPrice}</h3>`)
     }

     $('#resultsPhotoGal').on('click', 'button', displayItem)

})();
