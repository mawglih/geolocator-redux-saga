import axios from 'axios';
import {
    GOOGLE_API,
    REVERSE_URL,
 } from 'api/constants';
export const getLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error)
    );
});

export const displayLocation = (latitude,longitude) => {
    axios({
        method:'get',
        url:`${REVERSE_URL}latlng=${latitude},${longitude}&sensor=true&${GOOGLE_API}`,
    })
    .then(response => {
        const address = response.data.results[1].formatted_address;
        console.log('latitude in axios: ', latitude);
        console.log('longitude in axios: ', longitude);
        console.log('data is: ', address);
        return address;
    })
    .catch(error => {
        console.log(error);
    })
    .then(function() {
        console.log('axios completed');
    });
}

export default {};
