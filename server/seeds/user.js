exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'Xavier', password: 'october', city: 'New York City'},
        {id: 2, username: 'Matthew', password: 'october', city: 'Manhattan'},
        {id: 3, username: 'Enpha', password: 'october', city: 'Bronx'}
      ]);
    });
};
