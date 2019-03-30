console.log('Testing')
















const submitEmail = (e) => {
    e.preventDefault();
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
};
const submitButton = 
document.getElementById('submitButton')

const init = () => {
    submitButton.addEventListener("click", submitEmail);
};
init();
