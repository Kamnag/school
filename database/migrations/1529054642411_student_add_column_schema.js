'use strict'

const Schema = use('Schema')

class StudentAddColumnSchema extends Schema {
  up () {
    this.table('students', (table) => {
      table.string('created_at')
      table.string('updated_at')
    })
      // alter table
    
  }

  down () {
    this.table('students', (table) => {
      // reverse alternations
      table.dropColumn('created_at')
      table.dropColumn('updated_at')
    })
  }
}

module.exports = StudentAddColumnSchema
