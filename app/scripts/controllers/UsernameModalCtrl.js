(function(){
 function UsernameModalCtrl($uibModal, $rootScope, Chatrooms){

  this.ok = function(){
    var userName = document.querySelector("#username-form").value;
    if(userName){
    window.localStorage.setItem('blocChatCurrentUser', userName)
    $rootScope.modalInstance.close();
  }
  };
  this.cancel = function($uiModal){
    $rootScope.modalInstance.close();
  };
 }
 angular
  .module('blocChat')
  .controller('UsernameModalCtrl',['$uibModal', '$rootScope', 'Chatrooms', UsernameModalCtrl])

})();
