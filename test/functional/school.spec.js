'use strict'

const { test } = use('Test/Suite')('School')
const School = use('App/Models/School')


test('assign and get particular student', async ({ client }) => {
  await School.create({
    id: '97',
    name: '97',
    // group_id: '97',
    // roll: '97'
  })

  const response = await client.get('/schools').end()
  response.assertStatus(200)
  response.assertJSONSubset([{
    // created_at: "2018-06-15 15:03:14",
    id: 1,
    name: 'test1'
    // updated_at: "2018-06-15 15:03:14"
  }])
})


test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})
