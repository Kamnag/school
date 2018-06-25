'use strict'

const School = use('App/Models/School')

class SchoolController {

  async index({ response }) {
    const schools = await School.all()
    return schools
  }
  
  async store({ request, response }) {
    const { id, name } = request.post()
    return await School.create({ id, name })
  }

  async show({ request, response, params: { id } }) {
    const schools = await School
                    .query()
                    .on('query',console.log)
                    .where({ id })     
                    .with('groups.students')                                
                    .fetch()
                    
      // const schools = await School.find({ id })
      // const students = await schools.students().fetch()
    return schools.pluck('groups')
  }

  async update({ request, response }) {
    const { id, name } = request.post()
    return await school.save()
  }

  async delete({ request, response, params: { id } }) {
    const { school } = request.post()
    await school.delete()

    response.status(200).json({
      message: 'Successfully deleted this school.',
      deleted: true
    })
  }
}

module.exports = SchoolController









