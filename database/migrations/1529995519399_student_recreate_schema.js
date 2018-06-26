'use strict'

const Schema = use('Schema')

class StudentRecreateSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('id')
      table.string('name', 80)
      table.string('created_at')
      table.string('updated_at')
    
    })
  }

  down () {
    this.drop('student_recreates')
  }
}

module.exports = StudentRecreateSchema
