/* global kendo, window */

var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';

    var everlive = new Everlive("lM00QFqWjFjy7gZB");

    scope.add = kendo.observable({
        title: 'Add',
        ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'NDK' }, { id: 2, name: 'Al. Nevski' }, { id: 3, name: 'Telerik' }]
        }),
        alert: function (e) {
            alert(e.data.name);
        },
        addImage: function () {
            var success = function (data) {

                navigator.geolocation.getCurrentPosition(onSuccess, onError);

                // onSuccess Geolocation
                //
                function onSuccess(position) {
                    alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude);
                }

                // onError Callback receives a PositionError object
                //
                function onError(error) {
                    alert('code: ' + error.code + '\n' +
                          'message: ' + error.message + '\n');
                }

                everlive.Files.create({
                    Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
                    ContentType: "image/jpeg",
                    base64: data
                });
            };

            var error = function () {
                navigator.notification.alert("Unfortunately we could not add the image");
            };

            var config = {
                destinationType: Camera.DestinationType.DATA_URL,
                targetHeight: 400,
                targetWidth: 400
            };

            navigator.camera.getPicture(success, error, config);
        }
    });

    //scope.add = kendo.observable({
    //    title: 'Add',
    //    ds: new kendo.data.DataSource({
    //        data: [{ id: 1, name: 'NDK' }, { id: 2, name: 'Al. Nevski' }, { id: 3, name: 'Telerik' }]
    //    }),
    //    alert: function (e) {
    //        alert(e.data.name);
    //    }
    //});

    //scope.add = kendo.observable({
    //    title: '',
    //    isUrgent: false,
    //    saveTodo: function () {
    //        //backend serves
    //        window.todos.push({
    //            title: this.get('title'),
    //            isUrgent: this.get('isUrgent')
    //        });
    //    }
    //});
}(app.viewmodels));