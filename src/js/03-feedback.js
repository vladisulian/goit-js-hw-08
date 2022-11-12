const formElements = {
  form: document.querySelector('.feedback-form'),
  mail: document.querySelector('input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

formElements.form.addEventListener('submit', onFormSubmit);
formElements.mail.addEventListener('input', onMailInput);
formElements.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-message');
}

function onTextareaInput(e) {
  const message = e.currentTarget.value;
  localStorage.setItem('feedback-message', message);
}

function onMailInput(e) {
  const mail = e.currentTarget.value;
  localStorage.setItem('feedback-mail', mail);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-message');
  const savedMail = localStorage.getItem('feedback-mail');

  if (savedMessage && savedMail) {
    formElements.textarea.value = savedMessage;
    formElements.mail.value = savedMail;
  } else if (savedMessage) {
    formElements.textarea.value = savedMessage;
  } else if (savedMail) {
    formElements.mail.value = savedMail;
  }
}
