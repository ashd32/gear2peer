(function () {
    // here we parse the the window replace from app.js then create a variable called search term which parses the url
    // and saves the term after ?q= which is the user input which lets us make the api call for the data
    const searchParams = (new URL(window.location)).searchParams;
    const searchTerm = searchParams.get("category") || "";
    const searchLocation = searchParams.get("location") || "";

    // render function to display data
    const render = function (gear) {
        // < data-name="${gear.name}"
        //     data-price="${gear.price}"><div class = "col-md-12" >

        $('#resultCard').append(`
            <div class="container py-3">
                <div class="card">
                    <div class="row ">
                        <div id="resultImg" class="col-md-4"><img style = "width: 100%;" src = ${gear.photoURL};>
                        </div>
                        <div class="col-md-8 px-3">
                            <div class="card-block px-3">
                                <div id="cardTitle" class="card-title"><h2>${gear.name}</h2></div>
                                <div id="cardText" class="card-text"><h3>${gear.price}</h3></div>
                                <div id="cardText" class="card-text"><h4>Owner Username: ${gear.User.username}</h4></div>
                                <div id="cardText" class="card-text"><h4>Contact: ${gear.User.email}</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div><hr><br>`);
    };

    const searchGear = function () {

        if (searchTerm === "default" && searchLocation === "default") {
            $.get(`/api/products`)
            .then(function (gear) {
                $("#spinner").hide();
                for (let i = 0; i < gear.length; i++) {
                        console.log(gear[i]);
                        render(gear[i]);   
                }
            })
        } else if (searchTerm === "default") {
            $.get(`/api/products`)
                .then(function (gear) {
                    $("#spinner").hide();
                    for (let i = 0; i < gear.length; i++) {
                        if (searchLocation === gear[i].User.city) {
                            console.log(gear[i]);
                            render(gear[i]);
                        }
                    }
                })
        } else if (searchLocation === "default" && searchTerm !== "default") {
            $.get(`/api/products/${searchTerm}`)
            .then(function (gear) {
                $("#spinner").hide();
                for (let i = 0; i < gear.length; i++) {
                        console.log(gear[i]);
                        render(gear[i]);
                }
            })
        }else {
            $.get(`/api/products/${searchTerm}`)
                .then(function (gear) {
                    $("#spinner").hide();
                    for (let i = 0; i < gear.length; i++) {
                        if (searchLocation === gear[i].User.city) {
                            console.log(gear[i]);
                            render(gear[i]);
                        }
                    }
                })
        };
    }

    searchGear();

    // const displayItem = function (e) {
    //     e.preventDefault();
    //     const thisName = $(this).data('name')
    //     const thisPrice = $(this).data('price')

    //     console.log(thisName)
    //     console.log(thisPrice)

    //     $('#resultsPhotoGal').empty();

    //     $('#resultsPhotoGal').append(`<h1>${thisName}</h1><br /><h3>${thisPrice}</h3>`)
    // }

    // $('#resultsPhotoGal').on('click', 'button', displayItem)

})();
