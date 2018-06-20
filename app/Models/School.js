'use strict'

const Model = use('Model')

class School extends Model {
	groups(){
		return this.hasMany('App/Models/Group')
		}
}

module.exports = School
