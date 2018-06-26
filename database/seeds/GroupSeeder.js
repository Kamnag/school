'use strict'

/*
|--------------------------------------------------------------------------
| GroupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class GroupSeeder {
  async run () {
 //  	const groups = await Factory.model('App/Models/Group').create()
 //  	const schools = await Factory.model('App/Models/School').make()
	// await groups.school().save(schools)
  }
}

module.exports = GroupSeeder
