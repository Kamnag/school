'use strict'

const Schema = use('Schema')

class GroupAddColumnSchema extends Schema {
  up () {
    this.table('groups', (table) => {
      table.string('created_at')
      table.string('updated_at')
      // alter table
    })
  }

  down () {
    this.table('groups', (table) => {
      table.dropColumn('created_at')
      table.dropColumn('updated_at')
      // reverse alternations
    })
  }
}

module.exports = GroupAddColumnSchema
