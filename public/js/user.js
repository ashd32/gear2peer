
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

$('#userUploadSubmit').on('click', postGear)