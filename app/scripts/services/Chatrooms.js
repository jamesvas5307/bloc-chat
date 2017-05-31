(function() {
  function Chatrooms($firebaseArray) {
    var Chatrooms = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Chatrooms.all = rooms;

    return Chatrooms;
  }

  angular
    .module('blocChat')
    .factory('Chatrooms', ['$firebaseArray', Chatrooms]);
})();
