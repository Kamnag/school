'use strict'

const { test, trait, before, after } = use('Test/Suite')('Student')
const Factory = use('Factory')
const Database = use('Database')
const Student = use('App/Models/Student')

trait('Test/ApiClient')

// before(async () => {

// 	const students = await Factory.model('......').createMany(5)
// 	for(let student of students){
// 		const group = await Factory.model('...').create({ student_id: student.id })	
// 	// }
// 	// const user = await Factory.model('App/Models/User').create()
// 	// const post = await Factory.model('App/Models/Post').make()

// 	// await user.posts().save(post)

// }
// })


test('basic http test', async ({ client }) =>{

	client.get('students')

})

test('assign and get particular student', async ({ client }) => {
  // await Student.create({
  //   id: '97',
  //   name: '97'
  // })

  const response = await client.get('/students').end()
  response.assertStatus(200)
  response.assertJSONSubset([{
    // created_at: "2018-06-15 15:03:14",
    id: 1,
    name: 'Brandon Figueroa'
    // updated_at: "2018-06-15 15:03:14"
}])
  
})

// before (async () => {
//   const student = await Factory.model('App/Models/Student').create()
//  })

test('deleting user', async ({ client }) => {
	const response = await client.delete('/students')
	.send({
		id: 2,
		name: 'Jared Hines'
	}).end()
	response.assertStatus(404)
})

test('closing http request', async ({ client }) => {
	await client.get('students').end()
})

test('make sure 2 + 2 is 4', async ({ assert }) => {
	assert.equal(2 + 2, 4)
})
