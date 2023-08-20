const name = prompt("Enter your name");
const age = prompt("Enter your age");
const email = prompt("Enter your email");

const userInfo = {
  name: name,
  age: age,
  email: email,
};

localStorage.setItem("userInfo", JSON.stringify(userInfo));
const savedUserInfo = localStorage.getItem("userInfo");

if (savedUserInfo) {
  const parsedUserInfo = JSON.parse(savedUserInfo);
  const savedName = parsedUserInfo.name;

  document.getElementById("output").textContent = "Your name =>" + savedName;
} else {
  document.getElementById("output").textContent = "Information not found";
}
