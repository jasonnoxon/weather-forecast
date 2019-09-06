import axios from 'axios';

export default axios.create({
  baseURL: `https://api.apixu.com/v1/forecast.json?`
});
