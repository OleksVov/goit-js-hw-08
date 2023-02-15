import throttle from "lodash.throttle";

const refs = {
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    form: document.querySelector('.feedback-form')
};

// refs.email.addEventListener('input', onEmailInput);

refs.message.addEventListener('input', onTextareaInput);

refs.form.addEventListener('submit', onFormSubmit);

function onTextareaInput(event) {
    const valueTextarea = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", valueTextarea)
};




function onFormSubmit(event) {
    
}