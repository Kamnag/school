'use strict'

const Schema = use('Schema')

class StudentColumnNameChangeSchema extends Schema {
  up () {
    this.table('students', (table) => {
      // alter tab  
            table.renameColumn("scid", "gid");
    })
  }

  down () {
    this.table('student_column_name_changes', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StudentColumnNameChangeSchema
