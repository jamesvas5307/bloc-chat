(function() {
  function Chatrooms($firebaseArray) {
    var Chatrooms = {};
    var ref = firebase.database().ref().child("rooms");
    var ref2 = firebase.database().ref().child("messages");
    var rooms = $firebaseArray(ref);
    var messages = $firebaseArray(ref2);
    Chatrooms.all = rooms;

    Chatrooms.add = function(id){
      rooms.$add(id);
    }

    Chatrooms.getMessages = function(id){
      var m = ref2.orderByChild("roomId").equalTo(id);
      m = $firebaseArray(m);
      return m;
    }

    return Chatrooms;
  }

  angular
    .module('blocChat')
    .factory('Chatrooms', ['$firebaseArray', Chatrooms]);
})();
