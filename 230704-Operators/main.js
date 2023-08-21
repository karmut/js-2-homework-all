// //1
// console.dir(document);
// const input1 = document.getElementById("text1");
// const input2 = document.getElementById("text2");
// const button = document.querySelector(".control");

// button.addEventListener("click", () => {
//   const value1 = input1.value;
//   const value2 = input2.value;

//   if (value1 && value2) {
//     alert("Обидва поля заповнені");
//   } else {
//     alert("Не всі поля заповнені");
//   }
// });

// //2
// console.dir(document);
// const input1 = document.getElementById("text1");
// const input2 = document.getElementById("text2");
// const button = document.querySelector(".control");

// button.addEventListener("click", () => {
//   const value1 = Number(input1.value);
//   const value2 = Number(input2.value);

//   if (value1 + value2 <= 10) {
//     alert("Сума менша або дорівнює 10");
//   } else {
//     alert("Сума більша за 10");
//   }
// });

//3
// console.dir(document);
// const input1 = document.getElementById("text1");
// const input2 = document.getElementById("text2");
// const button = document.querySelector(".control");

// button.addEventListener("click", () => {
//   const value1 = input1.value;
//   const value2 = input2.value;

//   if (value1.includes("javascript") || value2.includes("javascript")) {
//     alert("JavaScript ist im Text");
//   } else {
//     alert("JavaScript ist nicht im Text");
//   }
// });

//4
console.dir(document);
const input1 = document.getElementById("text1");
const input2 = document.getElementById("text2");
const button = document.querySelector(".control");

button.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;

  if (value2 || (value1 >= 10 && value1) || value2 <= 20) {
    alert("true");
  } else {
    alert("false");
  }
});

//5

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementsByClassName(".Form");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function () {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (
      name.length >= 3 &&
      email.includes("@") &&
      email.includes(".") &&
      password.length >= 6
    ) {
      // Правильно заповнені дані, перенаправлення на іншу сторінку
      window.location.href = "інша_сторінка.html";
    } else {
      alert("Error.");
    }
  });
});
