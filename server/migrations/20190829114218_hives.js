exports.up = (knex, Promise) => {
    return knex.schema.createTable('hives', (table) => {
        table.increments('id').primary()
        table.string('subject')
        table.date('date_created')
        table.integer('creator_id')
        table.string('description')
        table.date('end-date')
        //table.string('url')
    })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
};
