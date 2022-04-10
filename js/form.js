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

deactivate();

export {activate, deactivate};