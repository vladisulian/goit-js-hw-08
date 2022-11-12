const formElements = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

formElements.form.addEventListener('submit', onFormSubmit);
formElements.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form submit');
  e.currentTarget.reset();
}

function onTextareaInput(e) {
  const message = e.currentTarget.value;
  localStorage.setItem('feedback-meesage', message);
}
