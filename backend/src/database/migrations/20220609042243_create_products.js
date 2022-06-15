/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('products', function (table){
      table.increments();  // ID auto incremento
      table.string('name').notNullable();
      table.decimal('value').notNullable();
      table.string('description').notNullable();
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
