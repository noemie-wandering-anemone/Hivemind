exports.seed = function (knex, Promise) {
  return knex('hives').insert([
    { id: 1, subject: 'test subject 1', dateCreated: 'test date 1', creator_id: 'test creator 1', description: 'test description 1', endDate: 'test end date 1'},
    { id: 2, subject: 'test subject 2', dateCreated: 'test date 2', creator_id: 'test creator 2', description: 'test description 2', endDate: 'test end date 2' },
    { id: 3, subject: 'test subject 3', dateCreated: 'test date 3', creator_id: 'test creator 3', description: 'test description 3', endDate: 'test end date 3' },
    { id: 4, subject: 'test subject 4', dateCreated: 'test date 4', creator_id: 'test creator 4', description: 'test description 4', endDate: 'test end date 4' },
    { id: 5, subject: 'test subject 5', dateCreated: 'test date 5', creator_id: 'test creator 5', description: 'test description 5', endDate: 'test end date 5'}

  ])
}
