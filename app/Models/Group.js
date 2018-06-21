'use strict'

const Model = use('Model')

class Group extends Model {
    students () {
        return this
          .belongsToMany('App/Models/Student').pivotTable('student_group')    }

    school (){
    	return this
    		.belongsTo('App/Models/School')
    }
}

module.exports = Group
