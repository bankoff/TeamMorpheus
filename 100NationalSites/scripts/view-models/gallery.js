///* global window, kendo */

var app = app || {};
app.viewmodels = app.viewmodels || {};
(function (scope) {
    'use strict';

    var everlive = new Everlive("lM00QFqWjFjy7gZB");

    scope.gallery = kendo.observable({
        title: 'Gallery',
        options: new kendo.data.DataSource({
            data: [{ id: 1, name: 'All' }, { id: 2, name: 'Visited' }, { id: 3, name: 'Not visited' }]
        }),
        ds: function () {
            everlive.Files.get().then(function (data) {
                var files = [];
                data.result.forEach(function (image) {
                    files.push(image.Uri);
                });
                setTimeout(function () {
                    $("#images").kendoMobileListView({
                        dataSource: files,
                        template: "<img src='#: data #' style='width:100%'/><span>#: data #</span>"
                    });
                }, 1000);
            });
        },
        alert: function (e) {
            alert(e.data.name);
        }
    });
}(app.viewmodels));