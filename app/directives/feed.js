app.directive('feed', function(){
    return {
        restrict: 'E',
        scope: {
            zone_height: "=zoneHeight"
        },
        templateUrl: 'templates/feed.html'
    };
});

