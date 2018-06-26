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
  		// const student = Factory
  		// .model('App/Models/Student')
  		// .createMany(5)
  		return {
  			name: faker.name()
  		}
  	})

Factory.blueprint('App/Models/Group', (faker) => {
	return {
		name: faker.name(),
		school_id: faker.integer({ min: 1, max: 20 })
	}
})

Factory.blueprint('App/Models/School', (faker) => {
	return {
		name: faker.name()
	}
})

