const october = '$2a$10$.UjOtTQiyh.5vipjKpbwN.b1ERqhSrn4amBDBu.Mqg5RxtqGriFvW'

exports.seed = function(knex, Promise) {
  return knex('user').del()
    .then(() => {
      return knex('user').insert([
        {username: 'Xavier', password: october, email: 'Pursuit'},
        {username: 'Steel', password: october, email: 'Kingsmail'},
        {username: 'Matt', password: october, email: 'Home'},
        {username: 'Reed', password: october, email: 'Reeder'},
        {username: 'Gabe', password: october, email: 'Housees.org'},
        {username: 'Luiza', password: october, email: 'phoners'}
      ]);
    });
};
