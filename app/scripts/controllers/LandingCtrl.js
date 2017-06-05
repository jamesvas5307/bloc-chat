(function(){
 function LandingCtrl($scope, Chatrooms){
   this.rooms = Chatrooms.all;

 }
 angular
  .module('blocChat')
  .controller('LandingCtrl',['$scope', 'Chatrooms',LandingCtrl])

})();
