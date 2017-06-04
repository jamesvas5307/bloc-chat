(function(){
  function SidenavCtrl(Chatrooms){
    this.rooms = Chatrooms.all;

  }

  angular
  .module('blocChat')
  .controller('SidenavCtrl',['Chatrooms',  SidenavCtrl]);
})();
