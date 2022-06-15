/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table){
    table.string('id').primary(); // Primary porque eu escolhi assim para o usuario logar sem senha
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('address').notNullable();
    table.string('type').notNullable(); // Admin = 1 ou normal = 0
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
