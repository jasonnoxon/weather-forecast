import axios from 'axios';

import config from '../config';

export default axios.create({
  baseURL: `https://api.apixu.com/v1/forecast.json?key=${config.KEY}&days=${config.DAYS}`
});
