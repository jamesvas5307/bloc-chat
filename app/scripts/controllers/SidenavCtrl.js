(function(){
  function SidenavCtrl(Chatrooms, $rootScope){
    this.rooms = Chatrooms.all;
    $rootScope.activeRoom = "Room 1";


    this.setActiveRoom = function(newVal){
      var target = event.target;
      $rootScope.activeRoom = target.innerHTML;
      $rootScope.activeId = target.dataset.id;
      $rootScope.activeRoomMessages = Chatrooms.getMessages($rootScope.activeId) || "No messages";
      }
    }

  angular
  .module('blocChat')
  .controller('SidenavCtrl',['Chatrooms', '$rootScope',  SidenavCtrl]);
})();
