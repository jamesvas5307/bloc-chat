(function(){
  function SidenavCtrl(Chatrooms){
    this.rooms = Chatrooms.all;
    console.log(this.rooms);
  }

  angular
  .module('blocChat')
  .controller('SidenavCtrl',['Chatrooms', SidenavCtrl]);
})();
