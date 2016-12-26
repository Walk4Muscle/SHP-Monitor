module.exports = function () {
    return {
        templateUrl: 'public/templates/menu-link.tmpl.html',
        scope: {
            section: '='
        },
        link: function (scope, e, a) {
            var controller = $element.parent().controller();

            $scope.isSelected = function () {
                return controller.isSelected($scope.section);
            };

            $scope.focusSection = function () {
                // set flag to be used later when
                // $locationChangeSuccess calls openPage()
                controller.autoFocusContent = true;
            };
        }
    }
}