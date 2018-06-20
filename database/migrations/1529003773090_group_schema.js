'use strict'

const Schema = use('Schema')

class GroupSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments('id')
      table.string('name', 80)
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupSchema
