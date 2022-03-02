exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        "id": 1,
        "username": "user1", 
        "password": "abc123"
      }, {
        "id": 2,
        "username": "user2",
        "password": "abc123"
      }, {
        "id": 3,
        "username": "user3",
        "password": "abc123"
      }, {
        "id": 4,
        "username": "user4",
        "password": "abc123"
      }, {
        "id": 5,
        "username": "user5",
        "password": "abc123"
      }]);
    });
};
