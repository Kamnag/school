'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request, response }) => {
 response.json({
   greeting: 'Hello world in JSON'
 })
   return { greeting: 'Hello world in JSON' }
})

//Routing Definition for Student model

Route.get('students', 'StudentController.index')
Route.get('students/:id', 'StudentController.show')
Route.post('students', 'StudentController.store')
Route.put('students/:sid', 'StudentController.update')
Route.delete('students/:sid', 'StudentController.delete')

//Routing Definition for School model
Route.get('schools', 'SchoolController.index')
Route.get('schools/:id', 'SchoolController.show')
Route.post('schools', 'SchoolController.store')
Route.put('schools/:id', 'SchoolController.update')
Route.delete('schools/:id', 'SchoolController.delete')

//Routing Definition for Group model
Route.get('groups', 'GroupController.index')
Route.get('groups/:id', 'GroupController.show')
Route.post('groups', 'GroupController.store')
Route.put('groups/:id', 'GroupController.update')
Route.delete('students/:id', 'GroupController.delete')



