
const newProduct = {
  userId: $('#uploadUserId').val(),
  name: $('#uploadName').val(),
  category: $('#userUploadCategory').val(),
  price: $('#uploadPrice').val(),
  photoURL: $('#uploadPhoto').val(),
  reiId: $('#uploadReiId').val(),
  isAvailable: 'true'
}

const postGear = function (e) {
  e.preventDefault();
    console.log(newProduct)

  // $.post('/api/products', newProduct).then (function(data) {
  // })
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