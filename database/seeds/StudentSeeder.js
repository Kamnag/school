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

class StudentSeeder {
	async run () {
		// const students = await Database.table('students')
		const students = await Factory.table('students').createMany(5)
		// const students = await Database.table('students').insert([

		// {
		// 	id: '39',
		// 	name: 'Technic'
		// }
		// ])
		console.log(students)
	}
}

module.exports = StudentSeeder
