$( document ).ready(function() {

// $(function () {

  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  const addProvider = function (event) {
    event.preventDefault();

    // Here we grab the form elements
    const newProvider = {
      customerName: $('#reserve-name').val().trim(),
      phoneNumber: $('#reserve-phone').val().trim(),
      customerEmail: $('#reserve-email').val().trim(),
      serviceType: $("#serviceType :selected").val()
    };
 
    // Clear the form when submitting
    $('#reserve-name').val('');
    $('#reserve-phone').val('');
    $('#reserve-email').val('');
    $('#reserve-unique-id').val('');

    $.ajax({
      method: 'POST',
      url: 'api/providerList',
      data: newProvider
    // })
      // .then(function () {
      //   return $.ajax({
      //     method: 'GET',
      //     url: 'api/providerList'

      //   });
      }).then(function (serviceType) {


        $('#myModal').css('display', 'block');
              console.log(newProvider);

      });

  };
  $('.submit').on('click', addProvider);

// });

// $(function () {

  /**
   * Render the providerApplication data to the appropriate part of the page.
   * The first parameter is the array of providerApplications to render.
   * The second parameter is the parent element to append to (.providerList or .requestList).
   */
  const render = function (dataList, parent) {
    for (let i = 0; i < dataList.length; i++) {
      const applications = $('<div>').addClass('box');
      applications.append(`<h3>${dataList[i].customerName}</h3>`);
      applications.append(`<p>${dataList[i].customerEmail}</p>`);
      applications.append(`<p>${dataList[i].phoneNumber}</p>`);
      applications.append(`<p>${dataList[i].serviceType}</p>`);

      parent.append(applications);
    }
  };

  /**
   * GET all the providerList from the server.
   * Then call render to render the data.
   */
  const getProviderList = function () {
    $.ajax({
      method: 'GET',
      url: 'api/providerList'
    }).then(function (data) {
      render(data, $('.providerList'));
    });
  };

  getProviderList();

  $('#clear').on('click', render);
  
  // AP (11.4) = Added function to close modal
  $('.close').on('click', function() {
    $('#myModal').css('display', 'none');
  })


});