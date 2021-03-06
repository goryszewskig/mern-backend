const axios = require('axios');
const HttpError = require('../models/http-error');

const API_KEY = process.env.API_KEY;

async function getCoordsForAddress(address) {
  return {
    lat: 40.7484474,
    lng: -73.9871516,
  };

  //   const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${API_KEY}
  // `;

  //   console.log(URL);

  //   const response = await axios.get(URL);

  //   const data = response.data;
  //   if (!data || data.status === 'ZERO_RESULTS') {
  //     const error = new HttpError(
  //       'Could not find location for this address',
  //       422
  //     );
  //     throw error;
  //   }
  //   const coordinates = data.results[0].geometry.location;
  //   console.log(coordinates);
  //   return coordinates;
}

module.exports = getCoordsForAddress;
