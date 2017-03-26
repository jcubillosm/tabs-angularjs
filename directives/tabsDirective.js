(function () {
    'use strict';
angular.module('app', [])
  .controller('responsiveTabsController', function($scope) {
    $scope.tab = -1;
    $scope.toggle = function(index) {
      $scope.tab = index;
      console.log('$scope.toggle (index) => ', index);
    };
    $scope.isSet = function (tabNum) {
      return tabNum === $scope.tab;
    }
    $scope.addClass = function(index) {
      return $scope.tab === index;
    }
  })
  .directive('responsiveTabsDirective', function () {
    return {
      scope:{
        info:'='
      },
      templateUrl: function(elem,attrs) {
          return '../partials/' + attrs.templateUrl
       },
      controller: 'responsiveTabsController'
    };


  });
})();