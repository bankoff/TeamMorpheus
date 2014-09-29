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
                $("#images").kendoMobileListView({
                    dataSource: data.result,
                    template: "<img src='#: data.Uri #' style='width:100%'/><span>#: data.Text #</span>"
                });
            });
        },
        alert: function (e) {
            alert(e.data.name);
        }
    });
}(app.viewmodels));