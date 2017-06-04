(function(){
  function config($stateProvider,$locationProvider){
    // To avoid hash bangs: you change enabled to true making clean urls
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
      // Basic Template: $stateProvider.state(stateName,stateConfig)
      $stateProvider
        .state('landing',{
          url: '/',
          controller: 'LandingCtrl as landing',
          templateUrl: '/templates/landing.html'
        });
  }
  angular
        .module('blocChat',['ui.router','firebase', 'ui.bootstrap'])
        .config(config);

  })();
