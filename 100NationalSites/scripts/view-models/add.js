/* global kendo, window */

var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';

    scope.add = kendo.observable({
        title: 'Add',
        ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'NDK' }, { id: 2, name: 'Al. Nevski' }, { id: 3, name: 'Telerik' }]
        }),
        alert: function (e) {
            alert(e.data.name);
        }
    });

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