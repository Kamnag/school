'use strict'

const { test, trait, before, after } = use('Test/Suite')('Group')
const Factory = use('Factory')
const Database = use('Database')
const Group = use('App/Models/Group')

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

test('assign and get particular group', async ({ client }) => {
  // await Group.create({
  //   id: '97',
  //   name: '97',
  // })

  const response = await client.get('/groups').end()
  response.assertStatus(200)
  response.assertJSONSubset([{
    // created_at: "2018-06-15 15:03:14",
    id: 1,
    name: 'Leah Steele'
    // updated_at: "2018-06-15 15:03:14"
  }])
  
})

test('deleting user', async ({ client }) => {
  const response = await client.delete('/groups')
  .send({
    id: 2,
    name: 'Ethan Woods'
  }).end()
  response.assertStatus(404)
})

test('closing http request', async ({ client }) => {
  await client.get('groups').end()
})

// before (async () => {
//   const student = await Factory.model('App/Models/Student').create()
//  })

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})
