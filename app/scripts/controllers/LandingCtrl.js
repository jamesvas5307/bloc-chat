(function(){
 function LandingCtrl($scope ,Chatrooms){
   this.rooms = Chatrooms.all;
 }
 function BlocChatCookies($rootScope,$uibModal) {
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
  .controller('LandingCtrl',['$scope', '$rootScope', '$uibModal', 'Chatrooms',LandingCtrl])
  .run(BlocChatCookies);

})();
