exports.up = (knex, Promise) => {
    return knex.schema.createTable('bees', (table) => {
        table.increments('id').primary()
        table.string('name')
        //table.string('email')
        table.boolean('send-hive')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('bees')
};
