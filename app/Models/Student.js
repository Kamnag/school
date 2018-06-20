'use strict'

const Model = use('Model')

class Student extends Model {
    groups () {
        return this.belongsToMany('App/Models/Group').pivotTable('student_group')
    }

}
module.exports = Student
