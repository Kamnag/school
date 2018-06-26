'use strict'

const Schema = use('Schema')

class SchoolAddColumnSchema extends Schema {
  up () {
    this.table('schools', (table) => {
      table.string('created_at')
      table.string('updated_at')
      // alter table
    })
  }

  down () {
    this.table('schools', (table) => {
      able.dropColumn('created_at')
      table.dropColumn('updated_at')
      // reverse alternations
    })
  }
}

module.exports = SchoolAddColumnSchema
