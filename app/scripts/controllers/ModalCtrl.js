(function(){
 function ModalCtrl($uibModal, $rootScope, Chatrooms){
   this.open = function () {
      $rootScope.modalInstance = $uibModal.open({
         ariaLabelledBy: 'modal-title',
         ariaDescribedBy: 'modal-body',
         backdrop: true,
         templateUrl: '../../templates/modalContent.html',
         controller: 'ModalCtrl',
         controllerAs: '$ctrl',
         size: 'lg'
       });
     };
  this.ok = function(){
    var roomName = this.newChatroom;
    if(roomName){
    Chatrooms.add(roomName);
    $rootScope.modalInstance.close();
  }
  };
  this.cancel = function($uiModal){
    $rootScope.modalInstance.close();
  };
 }
 angular
  .module('blocChat')
  .controller('ModalCtrl',['$uibModal', '$rootScope', 'Chatrooms', ModalCtrl])

})();
