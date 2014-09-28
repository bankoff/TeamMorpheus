/**
 * Login view model
 */
/* global kendo, window */

var app = app || {};
app.viewmodels = app.viewmodels || {};

app.Login = (function () {
    'use strict';

    var loginViewModel = (function () {

        var $loginUsername;
        var $loginPassword;

        var isFacebookLogin = app.isKeySet(appSettings.facebook.appId) && app.isKeySet(appSettings.facebook.redirectUri);
        var isGoogleLogin = app.isKeySet(appSettings.google.clientId) && app.isKeySet(appSettings.google.redirectUri);
        var isLiveIdLogin = app.isKeySet(appSettings.liveId.clientId) && app.isKeySet(appSettings.liveId.redirectUri);
        var isAdfsLogin = app.isKeySet(appSettings.adfs.adfsRealm) && app.isKeySet(appSettings.adfs.adfsEndpoint);

        var init = function () {

            if (!app.isKeySet(appSettings.everlive.apiKey)) {
                app.mobileApp.navigate('views/noApiKey.html', 'fade');
            }

            $loginUsername = $('#loginUsername');
            $loginPassword = $('#loginPassword');

            if (!isFacebookLogin) {
                $('#loginWithFacebook').addClass('disabled');
                console.log('Facebook App ID and/or Redirect URI not set. You cannot use Facebook login.');
            }
            if (!isGoogleLogin) {
                $('#loginWithGoogle').addClass('disabled');
                console.log('Google Client ID and/or Redirect URI not set. You cannot use Google login.');
            }
            if (!isLiveIdLogin) {
                $('#loginWithLiveID').addClass('disabled');
                console.log('LiveID Client ID and/or Redirect URI not set. You cannot use LiveID login.');
            }
            if (!isAdfsLogin) {
                $('#loginWithADSF').addClass('disabled');
                console.log('ADFS Realm and/or Endpoint not set. You cannot use ADFS login.');
            }
        };

        var show = function () {
            $loginUsername.val('');
            $loginPassword.val('');
        };

        var login = function () {

            var username = $loginUsername.val();
            var password = $loginPassword.val();

            // Authenticate using the username and password
            app.everlive.Users.login(username, password)
            .then(function () {
                 return app.Users.load();
            })
            .then(function () {
                app.mobileApp.navigate('views/gallery.html');
            })
            .then(null,
                  function (err) {
                      app.showError(err.message);
                  }
            );
        };

        var showMistAlert = function () {
            alert(appSettings.messages.mistSimulatorAlert);
        };

        return {
            init: init,
            show: show,
            getYear: app.getYear,
            login: login,
         //   loginWithFacebook: loginWithFacebook,
        //    loginWithGoogle: loginWithGoogle,
        //    loginWithLiveID: loginWithLiveID,
        //    loginWithADSF: loginWithADSF
        };

    }());

    return loginViewModel;
}());

//(function (scope) {
//    'use strict';

//    scope.login = kendo.observable({
//        title: 'Login',
//        //isUrgent: false,
//        //saveTodo: function () {
//        //    //backend serves
//        //    window.todos.push({
//        //        title: this.get('title'),
//        //        isUrgent: this.get('isUrgent')
//        //    });
//        //}
//    });
//}(app.viewmodels));