$(document).ready(function(){ //AP: Wrapped the entire app.js in document.ready
    console.log('i am here')
  // render function to display data
    const render = function (gear) {
        for(let i = 0; i < gear.length; i++){
            $('#searchDump').append(`<h1>${gear[i].name}</h1><h4>${gear[i].UserId}</h4>`);
        };
    };
    // function that captures user input to search for gear
    const searchGear = function(event) {
        event.preventDefault();
        console.log('i am here!')
        const product_name = $('#searchKeyWord').val()
        console.log('product: ', product_name)
  
        //AP: $.get doesn't work with the slim version of jQuery in html in line 193
        $.get(`/api/products/${product_name}`)
        .then(function (gear) {
            console.log(gear);
            render(gear);
        })

    };
    // respond to button click
    $('#searchSubmit').on('click', searchGear);
    // function to post new gear to products table
    const postGear = function (e) {
        e.preventDefault();
        const newGear = {
            name: $('#keyWord').val(),
            location: $('#location').val()
            // other fields which I dont know yet
        };
  
        $.post('/api/products', newGear)
        .then(function (gear) {   
        });
    };
  
    $('#submit').on('click', postGear);
  
    //AP: This shouldn't affect other parts of the code but as you have the
    // searchProduct in form; good to use .submit jQuery method
    $('#searchProduct').submit(searchGear);
  });