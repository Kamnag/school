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
    return schools



    // const school = School.find({id})
    // return school
    // const groups = await school.groups().fetch()

    // school.groups = groups

    // response.status(200).json({
    //   message: 'Here is your school.',
    //   data: school
    // })
  }

  async update({ request, response }) {
    const { scid, scname } = request.post()
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









