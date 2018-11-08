$(function () {

  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  const addRequest = function (event) {
    event.preventDefault();

    // Here we grab the form elements
    const newRequest = {
      customerName: $('#reserve-name').val().trim(),
      phoneNumber: $('#reserve-phone').val().trim(),
      customerEmail: $('#reserve-email').val().trim(),
      // Compares HTML dropdown values
      serviceType: $("#serviceType :selected").val()
    };

    // Clear the form when submitting
    $('#reserve-name').val('');
    $('#reserve-phone').val('');
    $('#reserve-email').val('');
    $('#reserve-unique-id').val('');

    $.ajax({
      method: 'POST',
      url: 'api/requestList',
      data: newRequest
    })
      .then(function () {
        return $.ajax({
          method: 'GET',
          url: 'api/providerList'

        });
      }).then(function (providersList) {

        var provider = "";

        for (let i = 0; i < providersList.length; i++) {
          if (providersList[i].serviceType === newRequest.serviceType) {
            provider = providersList[i];
          }
        }

        console.log('here ', provider)
        // Code for FOR loop, modal displayed afrer submitting request.
        const modalText = "<p> Hi " + newRequest.customerName + ", " + provider.customerName + " will take care of your " + newRequest.serviceType + " issue!</p>"
        // Replaces the entire modal content.
        $('.myModal-content').html(modalText)
        // Makes the modal visible.
        $('.myModal').css('display', 'block');

      });
  }
  $('.submit').on('click', addRequest);

});

$(function () {

  /**
   * Render the requestList data to the appropriate part of the page.
   * The first parameter is the array of requestList to render.
   * The second parameter is the parent element to append to .requestlist.
   */
  const render = function (requestList, parent) {
    for (let i = 0; i < requestList.length; i++) {
      const applications = $('<div>').addClass('box');
      applications.append(`<h3>${requestList[i].customerName}</h3>`);
      applications.append(`<p>${requestList[i].customerEmail}</p>`);
      applications.append(`<p>${requestList[i].phoneNumber}</p>`);
      applications.append(`<p>${requestList[i].serviceType}</p>`);

      parent.append(applications);
    }
  };


  /**
   * GET all the requestList data from the server.
   * Then call render to render the data.
   */
  const getRequestList = function () {
    $.ajax({
      method: 'GET',
      url: 'api/requestList'
    }).then(function (data) {
      render(data, $('.requestlist'));
    });
  };

  getRequestList();

  $('#clear').on('click', render);

  // Function to close modal
  $('.close').on('click', function () {
    $('#myModal').css('display', 'none');
  })
});
