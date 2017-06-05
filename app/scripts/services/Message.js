(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;

    Message.getByRoomId = function(roomId){
      var messages = ref.orderByChild("id").equalTo(roomId);
      return messages;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
