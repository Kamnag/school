'use strict'

const Schema = use('Schema')

class AddSchoolIdColumnInGroupSchema extends Schema {
  up () {
    this.table('groups', (table) => {
            table.integer('school_id')
      // alter table
    })
  }

  down () {
    this.table('groups', (table) => {
      table.dropColumn('school_id')

      // reverse alternations
    })
  }
}

module.exports = AddSchoolIdColumnInGroupSchema
