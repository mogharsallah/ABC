'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
    'ui.router',
    'snap',
	'ngResource',
    'ngAnimate'
    ])
 .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('login', {
      url: '/login',
      parent: 'base',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
  })
	.state('transaction', {
      url: '/transaction',
      parent: 'dashboard',
      templateUrl: 'views/dashboard/transaction.html',
      controller: 'TransactionCtrl'
  })
  .state('process', {
      url: '/process',
      parent: 'dashboard',
      templateUrl: 'views/dashboard/process.html',
      controller: 'ProcessCtrl'
  })
    .state('overview', {
        url: '/overview',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html',
		controller: 'OverviewCtrl'
    })
    .state('reports', {
        url: '/reports',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/reports.html'
    });

})

.factory('stats', function ($resource) {
    return $resource('localhost/getstats', {}, {
        query: { method: 'GET', isArray: true }
    })
})
.factory('transaction', function ($resource) {
    return $resource('localhost/transaction/?pk=:pk&a=:a', {pk:'@pk',a:'a'}, {
        create: { method: 'POST' }
    })
})
.factory('input', function ($resource) {
    return $resource('localhost/input', {}, {
        create: { method: 'POST' }
    })
})
.factory('report', function ($resource) {
    return $resource('localhost/getreport', {}, {
        create: { method: 'GET' }
    })
});