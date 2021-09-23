(function () {
  'use strict';
  
  angular.module('LunchBoxApp', [])
  .controller('AppController', AppController);
  
  AppController.$inject = ['$scope'];
  function AppController($scope) {
    $scope.input = "";
    $scope.feedback = "";

  
    $scope.calEstimation = function(){
      var str = $scope.input;
      const words = str.split(',');
      var count = words.length;
      if ($scope.input=="") {
        $scope.feedback = "Please enter the data first";
      }
      else if (count<=3) {
        $scope.feedback = "Enjoy!";
      }
      else{
        $scope.feedback = "Too much!";
      }

      //extra feature for blank space
      $scope.comment="";
      for (var i = 0; i < count; i++) {
        if(words[i]=='')
        $scope.comment="dont enter empty item ' ' ";
      }

  };
  
  };

  


})();