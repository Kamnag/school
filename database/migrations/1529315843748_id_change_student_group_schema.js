'use strict'

const Schema = use('Schema')

class IdChangeStudentGroupSchema extends Schema {
  up () {
    this.table('student_group', (table) => {
      // alter table
      table.renameColumn("gid", "group_id");

        // alter table
    })
  }

  down () {
    this.table('student_group', (table) => {
      // reverse alternations
    })
  }
}

module.exports = IdChangeStudentGroupSchema
