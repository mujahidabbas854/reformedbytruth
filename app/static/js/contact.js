// Initialize EmailJS
(function () {
  emailjs.init("6NKnFqKC38zOkCxE_"); // Replace with your real user ID
})();

const form = document.getElementById('contactForm');
const btn = document.querySelector('.submit-btn');
const popup = document.getElementById('popupSuccess');

const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');
const emailField = document.getElementById('email');
const subjectField = document.getElementById('subject');
const messageField = document.getElementById('message');

const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

function validateName(name) {
  return /^[a-zA-Z\s]+$/.test(name.trim());
}

function validatePhone(phone) {
  return /^[0-9+\-\s()]{7,15}$/.test(phone.trim());
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validateField(field, validator, errorElement) {
  if (!validator(field.value)) {
    errorElement.style.display = 'block';
    return false;
  } else {
    errorElement.style.display = 'none';
    return true;
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const isNameValid = validateField(nameField, validateName, nameError);
  const isPhoneValid = validateField(phoneField, validatePhone, phoneError);
  const isEmailValid = validateField(emailField, validateEmail, emailError);
  const isSubjectValid = subjectField.value.trim() !== '';
  const isMessageValid = messageField.value.trim() !== '';

  subjectError.style.display = isSubjectValid ? 'none' : 'block';
  messageError.style.display = isMessageValid ? 'none' : 'block';

  if (isNameValid && isPhoneValid && isEmailValid && isSubjectValid && isMessageValid) {
    btn.querySelector('span').textContent = 'Sending...';

    const serviceID = 'service_79qqzpq';   // Your EmailJS service ID
    const templateID = 'template_6rd0lvs'; // Your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.querySelector('span').textContent = 'SUBMIT';
        popup.style.display = 'block';
        setTimeout(() => {
          popup.style.display = 'none';
        }, 4000);
        form.reset();
      }, (err) => {
        btn.querySelector('span').textContent = 'SUBMIT';
        alert("Failed to send message:\n" + JSON.stringify(err));
      });
  }
});
