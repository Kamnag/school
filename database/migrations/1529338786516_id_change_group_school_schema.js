'use strict'

const Schema = use('Schema')

class IdChangeGroupSchoolSchema extends Schema {
  up () {
    this.table('group_schools', (table) => {
            table.renameColumn("gid", "group_id")
            table.renameColumn("scid", "school_id")

      // alter table
    })
  }

  down () {
    this.table('group_schools', (table) => {
      table.dropColumn("group_id")
      table.dropColumn("school_id")
      // reverse alternations
    })
  }
}

module.exports = IdChangeGroupSchoolSchema
