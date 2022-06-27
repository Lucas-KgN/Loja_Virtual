/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', function (table){
      table.increments();  // ID auto incremento
      table.string('user_id');
      table.decimal('value');
      table.string('closed').defaultTo(false);
      table.specificType('productsclient', 'TEXT[]');
    });
};

/** 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
