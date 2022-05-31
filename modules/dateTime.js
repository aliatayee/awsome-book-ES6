import { DateTime } from './luxon.js';

const dateTime = () => {
  const now = DateTime.now();
  const timeTemplate = now.toLocaleString(DateTime.DATETIME_MED);

  const dateTimeContainer = document.getElementById('dateTime');
  const timeEl = document.createElement('p');
  timeEl.textContent = timeTemplate;
  dateTimeContainer.append(timeEl);
};

export default dateTime;