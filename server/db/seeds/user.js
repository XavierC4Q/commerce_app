const october = '$2a$10$.UjOtTQiyh.5vipjKpbwN.b1ERqhSrn4amBDBu.Mqg5RxtqGriFvW'

exports.seed = function(knex, Promise) {
  return knex('user').del()
    .then(() => {
      return knex('user').insert([
        {id: 1, username: 'Xavier', password: october, email: 'Pursuit'},
        {id: 2, username: 'Steel', password: october, email: 'Kingsmail'},
        {id: 3, username: 'Matt', password: october, email: 'Home'},
        {id: 4, username: 'Reed', password: october, email: 'Reeder'},
        {id: 5, username: 'Gabe', password: october, email: 'Housees.org'},
        {id: 6, username: 'Luiza', password: october, email: 'phoners'}
      ]);
    });
};
