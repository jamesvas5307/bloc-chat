(function(){
 function LandingCtrl(Chatrooms, $rootScope){
   this.rooms = Chatrooms.all;

   this.newMessage = function(){
     var message = document.querySelector("#new-message-form").value;
     var activeRoom = $rootScope.activeId;
     if(message){
     Chatrooms.send(message,activeRoom);
     document.querySelector("#new-message-form").value = "";
   }
  };
 }
 function BlocChatCookies($uibModal) {
  var currentUser = window.localStorage.getItem('blocChatCurrentUser');
  if (!currentUser || currentUser === '') {
    $rootScope.modalInstance = $uibModal.open({
       ariaLabelledBy: 'modal-title',
       ariaDescribedBy: 'modal-body',
       backdrop: true,
       templateUrl: '../../templates/usernameModal.html',
       controller: 'UsernameModalCtrl',
       controllerAs: '$ctrl',
       size: 'lg'
     });
  }
}
 angular
  .module('blocChat')
  .controller('LandingCtrl',['Chatrooms','$rootScope','$uibModal' ,LandingCtrl])
  .run(BlocChatCookies);

})();
