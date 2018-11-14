const userLocation = $('#disabledInput').val()

const postingCategory = $('#userUploadCategory').val()

const newProduct = {
  userId:'' ,
  name: '' ,
  category: '' ,
  price: '' ,
  photoURL: '',
  reiId:'' ,
  isAvailable: 'true'
}

const postGear = function (e) {
  e.preventDefault();
  console.log(userLocation);
  console.log(postingCategory);

  // $.post('/api/products', newProduct).then (function(data) {

  // })
}

$('#userInputSubmit').on('click', postGear)
