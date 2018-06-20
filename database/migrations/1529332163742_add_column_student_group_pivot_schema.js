'use strict'

const Schema = use('Schema')

class AddColumnStudentGroupPivotSchema extends Schema {
  up () {
    this.table('student_group', (table) => {
            table.varchar('roll_no')

      // alter table
    })
  }

  down () {
    this.table('student_group', (table) => {
      table.dropColumn('roll_no')
      // reverse alternations
    })
  }
}

module.exports = AddColumnStudentGroupPivotSchema
