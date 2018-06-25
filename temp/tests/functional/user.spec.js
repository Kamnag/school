'use strict'

// const chai = require('chai')
// const request = require('supertest')
// const assert = chai.assert
// const baseUrl = `http://${process.env.HOST}:${process.env.PORT}/`
// require('co-mocha')



const Factory               = use('Factory')
const Database              = use('Database')
const Student               = use('App/Models/Student')
// const User                = use('App/Models/User/User')
const { test, trait, before, after }  = use('Test/Suite')('Content')
// const Question              = use('App/Models/Content/Question')
// const QuestionOption          = use('App/Models/Content/QuestionOption')
// const Cbseobjective           = use('App/Models/Content/CBSEObjective')

// trait('Test/ApiClient')
// trait('DatabaseTransactions')

before (async () => {

  const student = await Factory.model('App/Models/Student').create()
  // const session = await Factory.model('App/Models/Session').create({ userId: user.id })
  // const question = await Factory.model('App/Models/Content/Question').create()
  // const objectives = await Cbseobjective.query().select('id', 'unit', 'topic')
  // const questionIds = await Question.query().select('id').limit(100)
  
  // test globals
  // this.sessionId = session.uuid
  // this.questionIds = _.map(questionIds, 'id')
  // this.objectiveIds = _.map(objectives, 'id')
  // this.createdQuestionId = question.id
})

/*  ************************************************* 
                        OBJECTIVE
    ************************************************* */

test('Get objective index', async ({ client }) => {
  const response = await client
    .get('app/Controllers/Http/StudentController')
    // .header('x-session-id', this.sessionId)
    .end()

  response.assertStatus(200)
})


/*  ************************************************* 
                        QUESTION
    ************************************************* */

test('Get question index', async ({ client }) => {
  const response = await client
    .get('')
    // .header('x-session-id', this.sessionId)
    .end()

  response.assertStatus(200)
})



// describe('User', function () {
//   afterEach(function * () {
//     const Db = use('Database')
//     yield Db.truncate('users')
//   })

//   it('should throw validation error when user email is missing', function * () {
//     const response = yield request(baseUrl)
//       .post('register')
//       .expect('Content-Type', /json/)
//       .expect(400)

//     assert.equal(response.body.status, 400)
//     assert.equal(response.body.message, 'Validation failed')
//     assert.deepEqual(response.body.fields, [{field: 'email', 'validation': 'required', message: 'Enter email address to be used for login'}])
//   })

//   it('should throw validation error when user email is invalid', function * () {
//     const response = yield request(baseUrl)
//       .post('register')
//       .send({email: 'foo'})
//       .expect('Content-Type', /json/)
//       .expect(400)

//     assert.equal(response.body.status, 400)
//     assert.equal(response.body.message, 'Validation failed')
//     assert.deepEqual(response.body.fields, [{field: 'email', 'validation': 'email', message: 'Email address is not valid'}])
//   })

//   it('should throw validation error when user password is missing', function * () {
//     const response = yield request(baseUrl)
//       .post('register')
//       .send({email: 'newuser@adonisjs.com'})
//       .expect('Content-Type', /json/)
//       .expect(400)

//     assert.equal(response.body.status, 400)
//     assert.equal(response.body.message, 'Validation failed')
//     assert.deepEqual(response.body.fields, [{field: 'password', 'validation': 'required', message: 'Choose password for your account'}])
//   })

//   it('should throw validation error when user email address has already been taken', function * () {
//     const user = use('Factory').model('App/Model/User').make()
//     yield user.save()
//     const response = yield request(baseUrl)
//       .post('register')
//       .send({email: user.email, password: 'secret'})
//       .expect('Content-Type', /json/)
//       .expect(400)

//     assert.equal(response.body.status, 400)
//     assert.equal(response.body.message, 'Validation failed')
//     assert.deepEqual(response.body.fields, [{field: 'email', 'validation': 'unique', message: 'There\'s already an account with this email address'}])
//   })

//   it('should register a user and send registeration email', function * () {
//     const response = yield request(baseUrl)
//       .post('register')
//       .send({email: 'newuser@adonisjs.com', password: 'secret'})
//       .expect('Content-Type', /json/)
//       .expect(200)

//     assert.equal(response.body.status, 200)
//     assert.equal(response.body.message, 'Account created successfully')
//   })

//   it('should return 404 when unable to fetch a user with given token', function * () {
//     const response = yield request(baseUrl)
//       .get('account/verify')
//       .expect('Content-Type', /json/)
//       .expect(404)

//     assert.equal(response.body.message, 'Cannot find user with verification_code')
//     assert.equal(response.body.status, 404)
//   })

//   it('should return 200 when able to verify user account with a given token', function * () {
//     const user = use('Factory').model('App/Model/User').make()
//     yield user.save()
//     const reFetchUser = yield use('App/Model/User').find(user.id)
//     const response = yield request(baseUrl)
//       .get(`account/verify?token=${reFetchUser.verification_code}`)
//       .expect('Content-Type', /json/)
//       .expect(200)

//     assert.equal(response.body.message, 'Account verified successfully')
//     assert.equal(response.body.status, 200)
//   })
// })
