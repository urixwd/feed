app.directive('feedItem',['feed_ser', function(feed_ser){
    return {
        restrict: 'E',
        scope: {
            data: "=item"
        },
        link: function (scope, element, attrs) {
            scope.data.item_time = jQuery.timeago(scope.data.item_time);
        },
        templateUrl: 'templates/feedItem.html'
    };
}]);
