function loadUsers(userIds, load, done) {
    var users = [];
    var count = 0;
    userIds.forEach(function(userId, index) {
      load(userId, function(user) {
        users[index] = user;
        count++;
        if (count === userIds.length) {
          done(users);
        }
      });
    });
  }
  module.exports = loadUsers;
  