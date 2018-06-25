'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')


 Factory.blueprint('App/Models/Student', (faker) => {
  	// const student = await Factory
  	// 	.model('App/Models/Student')
  	// 	.createMany(5)
    return {
      id: faker.integer()
      name: faker.string()
    }
  })

//  Factory.blueprint('App/Models/Group', (faker) => {
//   return {
//     id: faker.integer(),
//     name: await Hash.make(faker.string())
//   }
// })

