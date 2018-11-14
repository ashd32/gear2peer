$(document).ready(function(){ //AP: Wrapped the entire app.js in document.ready
    console.log('i am here');

     // Here we grab the form elements // respond to button click
     const addRequest = function (event) {
    $('#userInputSubmit').on('click', function(e) {
        e.preventDefault();
        const newRequest = {
         // Compares HTML dropdown values
        product_name : $("#userInputCategory :selected").val(),
        location: $("#userInputLocation :selected").val()
        };
        // The window object below is how we get the submit button to take us to the results page. /results is the path and the ?q= is a search parameter which we grab from the user input but doesnt affect the path.
        window.location.replace("/results?q=" + product_name + "&location=" + location);
    });
    // Clear the form when submitting
  $('#userInputCategory').val('');
  $('#userInputLocation').val('');


  $.ajax({
    method: 'POST',
    url: 'api/products',
    data: __
  })
    .then(function () {
      return $.ajax({
        method: 'GET',
        url: 'api/products'

      });
    }).then(function (Product) {

      var category = "";

      for (let i = 0; i < Product.length; i++) {
        if (Product[i].userInputCategory === newRequest.userInputCategory) {
          category = Product[i];
        }
      }
    });
      console.log('here ', category);

    };
});

