'use strict';
var app = angular.module("feed_app", []);

app.run(['$rootScope', function($rootScope) {
    console.log("run... ");
}]);