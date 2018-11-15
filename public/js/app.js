$(document).ready(function () { //AP: Wrapped the entire app.js in document.ready
    console.log('i am here')

    // function that captures user input to search for gear
    const searchGear = function (event) {
        event.preventDefault();
        console.log('i am here!');
        const category = $('#userInputCategory').val();
        const location = $('#userInputLocation').val();
        window.location.replace("/results?category=" + category + "&location=" + location);

    };

    $('#searchSubmit').on('click', searchGear);
});