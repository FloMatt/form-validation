const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const errorElements = form.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const phone = form.elements.phone.value.trim();
  const message = form.elements.message.value.trim();

  const nameWords = name.split(" ");
  if (nameWords.length != 3) {
    document.getElementById("nameError").textContent =
      "Name must have atleast three words.";
  }

  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email FOrmat";
  }

  if (phone.length != 10) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits";
  }

  if (message.length > 50) {
    document.getElementById("messageError").textContent =
      "Message should not exceed 50 characters";
  }

  if (
    nameWords.length == 3 &&
    emailFormat.test(email) &&
    message.length <= 50
  ) {
    alert("Form submitted successfully!");
  }
});
