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
		// const students = await Database.table('students')
		const chance = new Chance()
		const student = await Factory.model('App/Models/Student').create()
		const group = await Factory.model('App/Models/Group').make()
		// const schools = await Factory.model('App/Models/School').make()
		// console.log(groups)
		await student.groups().save(group)

		await student.groups().sync([group.id], (row) => {
	      row.roll_no = chance.integer({ min: 1, max: 10 })
	    })
		
		console.log(student)
	}
}

module.exports = StudentSeeder





// await groups.school().save(schools)

		// const students = await Factory.model('App/Models/Student').createMany(10)
		// for(let student of students){
		// 	const groups = await Factory.model('App/Models/Group').create({ student_id: student.id })	
		// }


		// const students = await Database.table('students').insert([

		// {
		// 	id: '39',
		// 	name: 'Technic'
		// }
		// ])
