const signUpForm = document.querySelector(".form-box.register");
const loginForm = document.querySelector(".form-box.login");

// SIGN UP
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = signUpForm.querySelector("input[type='name']").value;
  const phoneNumber = signUpForm.querySelector("input[type='phone number']").value;
  const createPassword = signUpForm.querySelector("input[type='create password']").value;

  const user = {
    name,
    phoneNumber,
    createPassword
  };

  localStorage.setItem("user", JSON.stringify(user));

  signUpForm.reset();

  alert("Đăng ký thành công!");
});

// LOGIN
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginForm.querySelector("input[type='email']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.createPassword === password) {
    alert("Đăng nhập thành công!");
    window.location.href = "../index13.html";
  } else {
    alert(
      "Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu."
    );
  }

  loginForm.reset();
});

//ẩn hiện form gửi tin nhắn
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function() {
  var cards2 = document.getElementsByClassName("card2");
  for (var i = 0; i < cards2.length; i++) {
    cards2[i].style.display = "block";
  }
  
  var cards1 = document.getElementsByClassName("card1");
  for (var i = 0; i < cards1.length; i++) {
    cards1[i].style.display = "none";
  }
});