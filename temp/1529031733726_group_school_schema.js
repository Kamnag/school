'use strict'

const Schema = use('Schema')

class GroupSchoolSchema extends Schema {
  up () {
    this.create('group_schools', (table) => {
      table.increments()
      table.integer('gid')
      table.integer('scid')
    })
  }

  down () {
    this.drop('group_schools')
  }
}

module.exports = GroupSchoolSchema
