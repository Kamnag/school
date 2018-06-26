'use strict'

/*
|--------------------------------------------------------------------------
| StudentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Database = use('Database')

const Factory = use('Factory')

const Chance = use('chance')

class StudentSeeder {
	async run () {
		// const studentss = await Database.table('studentss')
		const chance = new Chance()
		const students = await Factory.model('App/Models/Student').create()
		const group = await Factory.model('App/Models/Group').make()
		const schools = await Factory.model('App/Models/School').make()
		// console.log(groups)
		await students.groups().save(group)
		await schools.groups().save(group)

		await students.groups().sync([group.id], (row) => {
	      row.roll_no = chance.integer({ min: 1, max: 10 })
	    })
		
		console.log(students)
	}
}

module.exports = StudentSeeder





// await groups.school().save(schools)

		// const studentss = await Factory.model('App/Models/Student').createMany(10)
		// for(let students of studentss){
		// 	const groups = await Factory.model('App/Models/Group').create({ students_id: students.id })	
		// }


		// const studentss = await Database.table('studentss').insert([

		// {
		// 	id: '39',
		// 	name: 'Technic'
		// }
		// ])
