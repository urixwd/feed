app.controller('FeedController', ['$scope', 'feed_ser', function($scope, feed_ser){
    console.log('FeedController');

    $scope.feed_data = feed_ser.data;
}]);
