(function(){
  function SidenavCtrl(Chatrooms, $rootScope){
    this.rooms = Chatrooms.all;
    $rootScope.activeRoom = "Room 1";
    //$rootScope.activeRoomMessages = Chatrooms.getMessages('room1');

    this.setActiveRoom = function(newVal){
      var target = event.target;
      $rootScope.activeRoom = target.innerHTML;
      var id = target.dataset.id;
      $rootScope.activeRoomMessages = Chatrooms.getMessages(id) || "No messages";
      }
    }

  angular
  .module('blocChat')
  .controller('SidenavCtrl',['Chatrooms', '$rootScope',  SidenavCtrl]);
})();
