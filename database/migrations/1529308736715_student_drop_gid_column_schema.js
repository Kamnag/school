'use strict'

const Schema = use('Schema')

class StudentDropGidColumnSchema extends Schema {
  up () {
        this.table('students', (table) => {
              // reverse alternations
              table.dropColumn('gid')      
              // alter table
    })
  }

  down () {
    this.table('student_drop_gid_columns', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StudentDropGidColumnSchema
