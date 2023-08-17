let chooseBtn = document.getElementById("choose"),
  reseiveBtn = document.getElementById("reseive"),
  contactForm = document.getElementsByClassName("contactform_name")[0],
  text = document.getElementsByTagName("h2")[0],
  modal = document.querySelector(".modal"),
  btn = document.querySelectorAll(".main_tel_title")[0],
  closeBtn = document.querySelector(".close"),
  message = document.getElementsByName("message")[0];

// Bu 2 usuldan foydalanib bomidi kichkina praktikalada boladi

// // // First way-bunda asosan tepada caqirilgan
// // codladan birini harakatlantirsa bo'ladi.

// function hover () {
//     text.textContent = 'Дейсвителбно хаммаси'
// }

// // Sekond way
// text.onmouseenter = hover

// Third way-bu usuldan bemalol foydalansa boladi
text.addEventListener("mouseentre", function () {
  text.textContent = "Дейсвительно хаммаси";
});

text.addEventListener("mouseleave", function () {
  text.textContent = "Все включено";
});

reseiveBtn.addEventListener("clic", function () {
  modal.style, (display = "block");
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

contactForm.addEventListener("input", function () {
  message.value = `Меня зовут ${contactForm.value} и я хочу:`;
});
