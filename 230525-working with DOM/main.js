const mainTitles = document.querySelectorAll(".main-title");
const divBody = document.querySelector(".all-elements");

for (let t of mainTitles) {
  t.textContent = "H1-title";
  t.style.backgroundColor = "red";
}
const titles = document.querySelectorAll(".title");

for (let t of titles) {
  t.textContent = "H2-title";
  t.style.backgroundColor = "green";
}
const texts = document.querySelectorAll(".text");

for (let t of texts) {
  t.textContent = "text";
  t.style.backgroundColor = "yellow";
}

divBody.style.backgroundColor = "black";
