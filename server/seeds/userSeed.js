exports.seed = async (knex, Promise) => {
  const seedUser = await knex('user').del()
    .then(async () => {
      const userInsert = await knex('user').insert([
        {id: 1, username: 'Xavier', password: 'october', email: 'gmail'},
        {id: 2, username: 'Matthew', password: 'october', email: 'hotmail'},
        {id: 3, username: 'Enpha', password: 'october', email: 'aol'}
      ])
      return userInsert
    })
  return seedUser
}
