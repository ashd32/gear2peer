// render function to display data
const render = function (gear) {
  for(let i = 0; i < gear.length; i++){
      $('#searchDump').append(`<h1>${gear[i].product_name}</h1><h4>${gear[i].id}</h4>`);
  };
};
// function that captures user input to search for gear
const searchGear = function (event) {
  event.preventDefault();
  const product_name = $('#searchKeyWord').val()


  $.get(`/api/products/${product_name}`)
  .then(function (gear) {
      console.log(gear);
      render(gear);
  })
};
// respond to button click
$('#searchSubmit').on('click', searchGear);
// function to put new gear to products table
const updateGear = function (e) {
  e.preventDefault();
  const updateGear = {
      name: $('#keyWord').val(),
      location: $('#location').val()
      // other fields which I dont know yet
  };

  $.put('/api/products', updateGear)
  .then(function (gear) {   
  });
};

$('#submit').on('click', updateGear);