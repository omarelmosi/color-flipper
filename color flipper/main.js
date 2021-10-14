co = [
  "#b1e61d",
  "#d72da0",
  "rgb(176,200,145)",
  "rgb(196,145,132)",
  "#a92dc9",
  "#d802a0",
];
button = document.getElementsByClassName("btn")[0];
result = document.getElementsByClassName("result")[0];

button.onclick = function (e) {
  let randomColor = co[getRandom()];
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
  result.textContent = `Background Color is [ ${randomColor} ]`;
};
function getRandom() {
  return Math.floor(Math.random() * co.length);
}
