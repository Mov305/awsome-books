import { DateTime } from '../node_modules/luxon/src/luxon.js';

const date = document.querySelector('#date');
const dt = DateTime.now() || Date();

const showDate = () => {
  date.innerHTML = dt;
};

export default showDate;
