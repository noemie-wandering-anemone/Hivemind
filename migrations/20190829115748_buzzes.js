exports.up = (knex, Promise) => {
    return knex.schema.createTable('buzzes', (table) => {
        table.increments('id').primary()
        table.string('content')
        table.integer('hive_id')
        table.integer('bee_id')
        table.date('end-date')
        //table.array('plusone')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('buzzes')
};
