app.directive('feedItem',['feed_ser', function(feed_ser){
    return {
        restrict: 'E',
        scope: {
            data: "=item"
        },
        link: function (scope, element, attrs) {
            scope.data.item_time = jQuery.timeago(scope.data.item_time);
            $('.feed-item').click(function(){
                //alert('123');
                console.log($(this).outerWidth());
            });
        },
        templateUrl: 'templates/feedItem.html'
    };
}]);
