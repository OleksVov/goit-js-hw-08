import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form')
};

let formData = {};

refs.form.addEventListener('submit', onFormSubmit);

onGetDataStorage();


function onFormSubmit(event) {
    event.preventDefault();

    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    savedData = {};
    formData = {};
}

function onGetDataStorage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedData);

    if(savedData) {
        const keys = Object.keys(savedData);
        keys.map(element => {
            document.querySelector(`[name='${element}']`).value = savedData[element];
            formData[element] = savedData[element];
        });
    }
}


refs.form.addEventListener('input', throttle(onFormInput, 500));



function onFormInput(event) {
formData[event.target.name] = event.target.value;

console.log(formData);

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
