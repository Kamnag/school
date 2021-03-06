'use strict'

const { test, trait, before, after } = use('Test/Suite')('School')
const Factory = use('Factory')
const Database = use('Database')
const School = use('App/Models/School')

trait('Test/ApiClient')

// before(async () => {

//  const students = await Factory.model('......').createMany(5)
//  for(let student of students){
//    const group = await Factory.model('...').create({ student_id: student.id }) 
//  // }
//  // const user = await Factory.model('App/Models/User').create()
//  // const post = await Factory.model('App/Models/Post').make()

//  // await user.posts().save(post)

// }
// })

test('assign and get particular school', async ({ client }) => {
  // await School.create({
  //   id: '97',
  //   name: '97',
  // })

  const response = await client.get('/schools').end()

  // console.log(response.body)
  response.assertStatus(200)
  response.assertJSONSubset([{
    // created_at: "2018-06-15 15:03:14",
    id: 1,
    name: 'Dominic Hale'
    // updated_at: "2018-06-15 15:03:14"
  }])
  
})

test('deleting user', async ({ client }) => {
  const response = await client.delete('/schools')
  .send({
    id: 2,
    name: 'Willie Parker'
  }).end()
  response.assertStatus(404)
})

test('closing http request', async ({ client }) => {
  await client.get('schools').end()
})

// before (async () => {
//   const student = await Factory.model('App/Models/Student').create()
//  })

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})
