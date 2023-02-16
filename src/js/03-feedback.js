import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    // email: document.querySelector('input'),
    // message: document.querySelector('textarea'),
    form: document.querySelector('.feedback-form')
};

// refs.email.addEventListener('input', onEmailInput);
// refs.message.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', onFormSubmit);

onGetDataStorage();


function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function onGetDataStorage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedData);

    if(savedData) {
        const keys = Object.keys(savedData);
        keys.map(element => {
            document.querySelector(`[name='${element}']`).value = savedData[element];
        });
    }
}


refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

function onFormInput(event) {
formData[event.target.name] = event.target.value;

console.log(formData);

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
