'use strict'

const Model = use('Model')

class School extends Model {
	groups(){
		return this.hasMany('App/Models/Group')
		}

	// static get hidden () {
 //    return ['id']
 //  }
}

module.exports = School
