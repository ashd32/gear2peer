
const postGear = function (e) {
  e.preventDefault();
  const newProduct = {
    UserId: $('#uploadUserId').val(),
    name: $('#uploadName').val(),
    category: $('#userUploadCategory').val(),
    price: $('#uploadPrice').val(),
    photoURL: $('#uploadPhoto').val(),
    reiId: $('#uploadReiId').val(),
    isAvailable: true
  }
    console.log(newProduct)
  $.post('/api/products', newProduct).then (function(data) {
      window.location.replace("/")
  });
}

const rei = function (e) {
  e.preventDefault();
  const productUrl = $('#reiID').val();
  $.get(`/scrape-rei?url=${productUrl}`, function (response) {
    console.log(response);
    $('#uploadName').val(response.title);
    $('#uploadPhoto').val(response.images[0]);
  });
}

$('#reiSubmit').on('click', rei);
$('#userUploadSubmit').on('click', postGear)