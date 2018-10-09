This project uses windows location service to get coordinates and Google reverse geocoding to resolve coordinates to the location.

Coordinates and place is stored to Redux store.
All async calls are used in redux-saga.
In order to use that code valid Google Map API key is required. Enter it in api/constants.js
Google Maps are loaded in index.js file by executing api/index.js file that calls google service by npm module load-script.
Another way to attach google service to project is incert google script in <script></script> tag in the index.html file as described in google map docs.
Any parts of the project can be reproduced anywhere and reused by anyone without limitations.

#google-maps-redux-saga