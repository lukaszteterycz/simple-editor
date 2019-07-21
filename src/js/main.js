const textArea = document.querySelector('.textarea__field--js');
const buttonLoad = document.querySelector('.button__load--js');
const buttonSave = document.querySelector('.button__save--js');

function loadText() {
  if (localStorage.getItem('text').length > 0) {
    textArea.value = localStorage.getItem('text');
  }
}

function saveText() {
  localStorage.setItem('text', textArea.value)
}

buttonLoad.addEventListener('click', loadText);
buttonSave.addEventListener('click', saveText);
