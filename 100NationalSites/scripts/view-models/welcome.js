/**
 * Welcome view model
 */

var app = app || {};

app.Welcome = (function () {
    'use strict';

    var welcomeViewModel = (function () {

        var show = function () {
            $('#user-greeting').text('Welcome, ' + app.currentUser.data.DisplayName);
        };

        var logout = function () {
            navigator.notification.confirm('Do you really want to exit?', function (confirmed) {
                var exit = function () {
                    navigator.app.exitApp();
                };

                if (confirmed === true || confirmed === 1) {
                    // Stop EQATEC analytics monitor on app exit
                    //if (analytics.isAnalytics()) {
                    //    analytics.Stop();
                    //}
                    app.currentUser = kendo.observable({ data: null });
                    app.helper.logout();
                    app.mobileApp.navigate('views/login.html');
                   // app.helper.logout().then(exit, exit);
                }
            }, 'Exit', ['OK', 'Cancel']);
        };

        return {
            show: show,
            logout: logout
        };

    }());

    return welcomeViewModel;
}());