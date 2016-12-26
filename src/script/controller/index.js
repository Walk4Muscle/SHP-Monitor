let app = angular.module('app.Ctrl', []);

app.controller('homeCtrl', require('./homeCtrl'));

app.controller('LeftCtrl', ($scope, menu, $timeout, $mdSidenav, $log) => {
    $scope.menu = menu;
    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };
})
module.exports = 'app.Ctrl';