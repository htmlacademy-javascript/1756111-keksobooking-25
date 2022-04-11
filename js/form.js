const formTemplate = document.querySelector('.ad-form');
const mapFiltersTemplate = document.querySelector('.map__filters');

const activate = () => {
  formTemplate.classList.remove('ad-form--disabled');
  mapFiltersTemplate.classList.remove('mapfilters--disabled');
  formTemplate.querySelectorAll('fieldset, select').forEach(item => item.disabled = false);
  mapFiltersTemplate.querySelectorAll('select, fieldset').forEach(item => item.disabled = false);
};

const deactivate = () => {
  formTemplate.classList.add('ad-form--disabled');
  mapFiltersTemplate.classList.add('map__filters--disabled');
  formTemplate.querySelectorAll('fieldset').forEach(item => item.disabled = true);
  mapFiltersTemplate.querySelectorAll('select, fieldset').forEach(item => item.disabled = true);
};

// deactivate();

const form = document.querySelector('.ad-form');

const pristine = new pristine(form, {
  classTo: 'setup-wizard-form__element',
  errorTextParent: 'setup-wizard-form__element',
  errorTextClass: 'setup-wizard-form__error-text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

export {activate, deactivate};
