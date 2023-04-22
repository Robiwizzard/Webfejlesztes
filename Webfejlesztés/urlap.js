const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function oracleTransform(text) {
  const splitText = text.split(' ')
  console.log(splitText);
  let escapedOracle = "%28"

  for (const element of splitText) {
    escapedOracle = escapedOracle + "oracle%3A" + element + "+"
  }

  escapedOracle = "asd"
  console.log(escapedOracle)
  

}

function submitForm(event) {
  /*event.preventDefault();
  const nameInput = document.getElementById("name");
  const textInput = document.getElementById("box-text");
  const name = nameInput.value;
  const oracleText = textInput.value;
  let searchUrl = "https://scryfall.com/search?q="+name+"+%28oracle%3A"+ oracleText + "%29&unique=cards&as=grid&order=name"
  window.open(searchUrl);*/
  const textInput = document.getElementById("box-text");
  const oracleText = textInput.value;
  oracleTransform("Ferenc asd")
  return false
}