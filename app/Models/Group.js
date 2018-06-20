'use strict'

const Model = use('Model')

class Group extends Model {
    students () {
        return this
          .hasMany('App/Models/Student')
    }

    school (){
    	return this
    		.belongsTo('App/Models/School')
    }
}

module.exports = Group
