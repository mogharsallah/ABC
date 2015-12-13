angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

  })

	  .controller('TransactionCtrl', function($scope, $state) {
	
    $scope.$state = $state;
	$scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }
  })

  .controller('OverviewCtrl', function($scope, $state,stats) {
	
    $scope.$state = $state;
	
  })
    .controller('ProcessCtrl', function($scope, $state) {
	
    $scope.$state = $state;
	$scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }
  })
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }

  });
