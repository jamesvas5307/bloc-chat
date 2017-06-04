(function() {
  function Chatrooms($firebaseArray) {
    var Chatrooms = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Chatrooms.all = rooms;

    Chatrooms.add = function(id){
      var label = "room" + rooms.length;
      rooms.$add(id);
    }

    return Chatrooms;
  }

  angular
    .module('blocChat')
    .factory('Chatrooms', ['$firebaseArray', Chatrooms]);
})();
