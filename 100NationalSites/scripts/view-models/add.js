/* global kendo, window */

var app = app || {};

app.Add = (function () {
    'use strict';

    var addViewModel = (function () {

        var isLocationValidSite = function (location) {
            var query = new Everlive.Query();
            query.where().nearSphere('Location', [location.longitude, location.latitude], 0.5, 'km');
            var sites = app.everlive.data('Locations');
            sites.get(query)
                .then(function (data) {
                    console.log(JSON.stringify(data.result));
                },
                function (error) {
                    console.log(JSON.stringify(error));
                });
        }

        var currentLocation = function () {
            var options = {
                enableHighAccuracy: true
            },
            currentPosition = {};


            var locator = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

            // onSuccess Geolocation
            function onSuccess(position) {
                //alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude);
                currentPosition.latitude = position.coords.latitude;
                currentPosition.longitude = position.coords.longitude;

                return true;
            }

            // onError Callback receives a PositionError object
            function onError(error) {
                alert('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
                return false;
            }

            if (locator) {
                return currentPosition;
            } else {
                return false;
            }
        }

        var addPhotoDetailsToDB = function () {

        };

        var addPhoto = function () {
            if (app.isConnected()) {
                var location = currentLocation();
                isLocationValidSite(location);
                var success = function (data) {
                    app.everlive.Files.create({
                        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
                        ContentType: "image/jpeg",
                        base64: data
                    });
                };

                var error = function () {
                    app.showAlert("Unfortunately we could not add the image");
                };

                var config = {
                    destinationType: Camera.DestinationType.DATA_URL,
                    targetHeight: 400,
                    targetWidth: 400
                };

                navigator.camera.getPicture(success, error, config);
            }
        }

        return {
            addPhoto: addPhoto
        };

    }());

    return addViewModel;
}());