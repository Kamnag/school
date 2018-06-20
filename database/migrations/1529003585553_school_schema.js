'use strict'

const Schema = use('Schema')

class SchoolSchema extends Schema {
  up () {
    this.create('schools', (table) => {
      table.increments('id')
      table.string('name', 80)
    })
  }

  down () {
    this.drop('schools')
  }
}

module.exports = SchoolSchema
