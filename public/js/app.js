$(document).ready(function(){ //AP: Wrapped the entire app.js in document.ready
    console.log('i am here')

    // respond to button click
    $('#userInputSubmit').on('click', function(e) {
        e.preventDefault();
        const product_name = $('#userInputCategory').val();
        const location = $('#userInputLocation').val();
        // The window object below is how we get the submit button to take us to the results page. /results is the path and the ?q= is a search parameter which we grab from the user input but doesnt affect the path.
        window.location.replace("/results?q=" + product_name + "&location=" + location);
    });
})

    // function to post new gear to products table
//     const postGear = function (e) {
//         e.preventDefault();
//         const newGear = {
//             name: $('#keyWord').val(),
//             location: $('#location').val()
//             // other fields which I dont know yet
//         };
  
//         $.post('/api/products', newGear)
//         .then(function (gear) {   
//         });
//     };
  
//     $('#submit').on('click', function (e) {
//         e.preventDefault();
//         postGear();
//     });
  
//   });