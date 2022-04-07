const formTemplate = document.querySelector('.ad-form');
const mapFiltersTemplate = document.querySelector('.mapfilters');

const activate = () => {
  formTemplate.classList.remove('ad-form--disabled');
  mapFiltersTemplate.classList.remove('mapfilters--disabled');
  formTemplate.querySelectorAll('fieldset').forEach(item => item.removeAttribute('disabled'));
  mapFiltersTemplate.querySelectorAll('select').forEach(item => item.removeAttribute('disabled'));
  mapFiltersTemplate.querySelectorAll('fieldset').forEach(item => item.removeAttribute('disabled'));
};

const deactivate = () => {
  formTemplate.classList.add('ad-form--disabled');
  mapFiltersTemplate.classList.add('map__filters--disabled');
  formTemplate.querySelectorAll('fieldset').forEach(item => item.setAttribute('disabled', 'disabled'));
  mapFiltersTemplate.querySelectorAll('select').forEach(item => item.setAttribute('disabled', 'disabled'));
  mapFiltersTemplate.querySelectorAll('fieldset').forEach(item => item.setAttribute('disabled', 'disabled'));
};

deactivate();

export {activate, deactivate};