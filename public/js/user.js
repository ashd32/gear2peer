
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

$('#userUploadSubmit').on('click', postGear)