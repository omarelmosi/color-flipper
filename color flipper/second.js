hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
button = document.getElementsByClassName("btn")[0];
result = document.getElementsByClassName("result")[0];

button.onclick = function (e) {
  hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  document.body.style.backgroundColor = hexColor;
  result.textContent = `Background Color is [ ${hexColor} ]`;
};

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
