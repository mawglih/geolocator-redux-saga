import { GOOGLE_API } from 'api/constants';

export const getAddress = (latitude, longitude) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    const method = 'GET';
    const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng='${latitude},${longitude}&sensor=true&key=${GOOGLE_API}`;
    const async = true;

    request.open(method, url, async);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                var address = data.results[0];
                resolve(address);
            }
            else {
                reject(request.status);
            }
        }
    };
    request.send();
});

export const getLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error)
    );
});

export default {};
