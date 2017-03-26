

angular.module('app')
.controller('appController', function($scope, $http){
    $http.get('../mocks/api.json')
    .then(function (response){
      $scope.jsondata = response.data.tabs;
      console.log('appController (API) => ', response.data);
      console.log("appController (status):" + response.status);
    }).catch(function(response) {
      console.error(' appController (Error occurred):', response.status, response.data);
    }).finally(function() {
       console.log("appController (Task Finished)");
    });
}); 