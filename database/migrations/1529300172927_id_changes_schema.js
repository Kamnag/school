'use strict'

const Schema = use('Schema')

class IdChangesSchema extends Schema {
  up () {
    this.table('students', (table) => {
      // alter table
      table.renameColumn("sid", "id");
  })

    this.table('schools', (table) => {
      // alter table
      table.renameColumn("scid", "id");
  })

    this.table('groups', (table) => {
      // alter table
      table.renameColumn("gid", "id");
  })
    this.table('students', (table) => {
      // alter table
      table.renameColumn("sname", "name");
  })

    this.table('schools', (table) => {
      // alter table
      table.renameColumn("scname", "name");
  })

    this.table('groups', (table) => {
      // alter table
      table.renameColumn("gname", "name");
  })
  }

  down () {
    this.table('students', (table) => {
      // reverse alternations
            table.renameColumn("id", "sid");
    })

    this.table('schools', (table) => {
      // alter table
      table.renameColumn("id", "scid");
  })

    this.table('groups', (table) => {
      // alter table
      table.renameColumn("id", "gid");
  })
    this.table('students', (table) => {
      // alter table
      table.renameColumn("ame", "snname");
  })

    this.table('schools', (table) => {
      // alter table
      table.renameColumn("name", "scname");
  })

    this.table('groups', (table) => {
      // alter table
      table.renameColumn("name", "gname");
  })
  }
}

module.exports = IdChangesSchema
