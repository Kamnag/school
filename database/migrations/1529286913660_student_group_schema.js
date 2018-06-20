'use strict'

const Schema = use('Schema')

class StudentGroupSchema extends Schema {
  up () {
    this.create('student_group', (table) => {
      table.increments()
      table.integer('sid')
      table.integer('gid')
    })
  }
  down () {
    this.drop('student_group')
  }
}

module.exports = StudentGroupSchema
