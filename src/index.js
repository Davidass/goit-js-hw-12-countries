import lodash from 'lodash';
import './js/fetchCountries';

const input = document.querySelector('.form-control');
input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  }, 500),
);
