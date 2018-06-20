'use strict'

const Schema = use('Schema')

class DeleteGroupSchoolsSchema extends Schema {
  up () {
          this.drop('group_schools')

      // alter table
  
  }

  down () {
    this.table('delete_group_schools', (table) => {
      // reverse alternations
    })
  }
}

module.exports = DeleteGroupSchoolsSchema
