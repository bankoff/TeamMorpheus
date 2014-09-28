/// <reference path="../kendo/js/kendo.mobile.min.js" />
/// <reference path="../kendo/js/kendo.mobile.min.intellisense.js" />
/// <reference path="../kendo/js/kendo.mobile-vsdoc.js" />

(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    //window.APP = {
    //  models: {
    //    login: {
    //      title: 'Login'
    //    },
    //    add: {
    //        title: 'Add',
    //        ds: new kendo.data.DataSource({
    //            data: [{ id: 1, name: 'NDK' }, { id: 2, name: 'Al. Nevski' }, { id: 3, name: 'Telerik' }]
    //        }),
    //        alert: function (e) {
    //            alert(e.data.name);
    //        }
    //    },
    //    gallery: {
    //      title: 'Gallery',
    //      options: new kendo.data.DataSource({
    //        data: [{ id: 1, name: 'All' }, { id: 2, name: 'Visited' }, { id: 3, name: 'Not visited' }]
    //      }),
    //      ds: new kendo.data.DataSource({
    //          data: [{ id: 1, name: 'NDK' }, { id: 2, name: 'Al. Nevski' }, { id: 3, name: 'Telerik' }]
    //      }),
    //      alert: function(e) {
    //        alert(e.data.name);
    //      }
    //    }
    //  }
    //};



    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {  
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();

      app = new kendo.mobile.Application(document.body, {
        
        // you can change the default transition (slide, zoom or fade)
        transition: 'slide',
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/login.html'
      });

    }, false);


}());