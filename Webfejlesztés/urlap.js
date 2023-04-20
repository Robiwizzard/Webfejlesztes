const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  console.log(name);
}