/* global window, kendo */

var app = app || {};
app.viewmodels = app.viewmodels || {};
(function (scope) {
    'use strict';

    scope.gallery = kendo.observable({
        title: 'Gallery',
        options: new kendo.data.DataSource({
            data: [{ id: 1, name: 'All' }, { id: 2, name: 'Visited' }, { id: 3, name: 'Not visited' }]
        }),
        ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'NDK' }, { id: 2, name: 'Al. Nevski' }, { id: 3, name: 'Telerik' }]
        }),
        alert: function (e) {
            alert(e.data.name);
        }
    });

    //function loadTodos() {
    //    return window.todos;
    //}

    //scope.todos = function (e) {
    //    var vm = kendo.observable({
    //        title: 'List TODOs',
    //        todos: loadTodos()
    //    });
    //    kendo.bind(e.view.element, vm);
    //};
}(app.viewmodels));