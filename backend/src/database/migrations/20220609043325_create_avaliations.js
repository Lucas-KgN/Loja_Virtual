// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
//  exports.up = function(knex) {
//     return knex.schema.createTable('avaliations', function (table){
//       table.increments();  // ID auto incremento
//       table.string('product').notNullable();
//       table.decimal('note').notNullable();
//       table.string('user').notNullable();

//       table.string('user_id').notNullable(); // A tabela primaria relacionada
//       table.foreign('user_id').references('id').inTable('users');

//       table.string('product_id'); // A tabela primaria relacionada
//       table.foreign('product_id').references('id').inTable('products');
//     });
//   };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//   return knex.schema.dropTable('avaliations');
// };
