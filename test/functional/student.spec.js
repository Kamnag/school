'use strict'

const { test, trait, before, after } = use('Test/Suite')('Student')
const Factory = use('Factory')
const Database = use('Database')
const Student = use('App/Models/Student')

trait('Test/ApiClient')

test('get list of students', async ({ client }) => {
  await Student.create({
    id: '97',
    name: '97',
    // group_id: '97',
    // roll: '97'
  })

  const response = await client.get('/students').end()
  response.assertStatus(200)
  response.assertJSONSubset([{
    // created_at: "2018-06-15 15:03:14",
    id: 1,
    name: 'test1'
    // updated_at: "2018-06-15 15:03:14"
  }])
})

// before (async () => {
//   const student = await Factory.model('App/Models/Student').create()
//  })

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})
