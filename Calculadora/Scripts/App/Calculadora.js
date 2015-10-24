// http://weblogs.asp.net/dwahlin/archive/2013/09/18/building-an-angularjs-modal-service.aspx
angular
    .module('calculadora.Calculadora', [])
    .controller('CalculadoraController', [
        '$scope',
        '$location',
        '$routeParams',
		'$timeout',
		'$rootScope',
        function ($scope, $location, $routeParams, $timeout, $rootScope, calendarservice) {
            var _spinner = angular.element(document.getElementById('spinner')).scope();
            _spinner.loading = true;
            $scope.isNumber = false;

            $scope.setData = function (data) {
                $scope.name = data;
            };

            $scope.getDataAsync = function () {
                $scope.setData('Fer');
                _spinner.loading = false;
            };

            $scope.$watch('name', function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.isNumber = !isNaN(newVal);
                }
            }, true);

            $scope.getDataAsync();
        }]);