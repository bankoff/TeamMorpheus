/**
 * Signup view model
 */
var app = app || {};

app.Gallery = (function () {
    'use strict';

    var galleryViewModel = (function () {
        'use strict';

        var imagesOptions = [{ id: 1, name: 'All' }, { id: 2, name: 'Visited' }, { id: 3, name: 'Not visited' }];

        var imagesDataList = [];

        var imagesData = (function () {
            var images = app.everlive.Files;

            images.get()
                .then(function (data) {
                    for (var i = 0; i < data.result.length; i++) {
                        imagesDataList.push(data.result[i]);
                    }
                },
                function (error) {
                    console.log(JSON.stringify(error));
                });
        }());
        
        var init = function () {

            //var template = kendo.template($("#javascriptTemplate").html());

            ////Create some dummy data
            //var data = ["Todd", "Steve", "Burke"];

            //var result = template(data); //Execute the template
            //$("#example").html(result); //Append the result

        };

        //scope.gallery = kendo.observable({
        //title: 'Gallery',
        //options: new kendo.data.DataSource({
        //    data: [{ id: 1, name: 'All' }, { id: 2, name: 'Visited' }, { id: 3, name: 'Not visited' }]
        //}),
        //ds: function () {
        //    everlive.Files.get().then(function (data) {
        //        $("#images").kendoMobileListView({
        //            dataSource: data.result,
        //            template: "<img src='#: data.Uri #' style='width:100%'/><span>#: data.Text #</span>"
        //        });
        //    });
        //    //},
        //    alert: function (e) {
        //        alert(e.data.name);
        //    }
        //});
        //}

        var show = function () {

        }

        return {
            init: init,
            show: show,
            imagesOptions: imagesOptions,
            imagesDataList: imagesDataList
        };

    }());

    return galleryViewModel;

}());
//    var everlive = new Everlive("lM00QFqWjFjy7gZB");

//    scope.gallery = kendo.observable({
//        title: 'Gallery',
//        options: new kendo.data.DataSource({
//            data: [{ id: 1, name: 'All' }, { id: 2, name: 'Visited' }, { id: 3, name: 'Not visited' }]
//        }),
//        ds: function () {
//            everlive.Files.get().then(function (data) {
//                $("#images").kendoMobileListView({
//                    dataSource: data.result,
//                    template: "<img src='#: data.Uri #' style='width:100%'/><span>#: data.Text #</span>"
//                });
//            });
//        },
//        alert: function (e) {
//            alert(e.data.name);
//        }
//    });
//}(app.viewmodels));