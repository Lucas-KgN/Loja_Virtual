// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
//  exports.up = function(knex) {
//     return knex.schema.createTable('requests', function (table){
//       table.string.increments();  // ID auto incremento
//       table.string('user_id').notNullable();
//       table.decimal('value').defaultTo(0.0);
//       table.boolean('closed').defaultTo(false);
//     });
//   };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//   return knex.schema.dropTable('requests');
// };
