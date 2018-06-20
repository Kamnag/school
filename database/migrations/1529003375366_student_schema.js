'use strict'

const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('id')
      table.string('name', 80)
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
