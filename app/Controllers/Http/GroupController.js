'use strict'

const Group = use('App/Models/Group')
const School = use('App/Models/School')

class GroupController {

  async index({ response }) {
    const groups = await Group.all()
    return groups
  }

  async store({ request, response }) {
    const { school_id, school_name, group_id } = request.post()
    const school = await School.findBy('id', scid)
    const group = await Group.find(group_id)
    return await group.schools().attach([school.id])
  }

  async show({ request, response, params:{id} }) {
    const group = await Group.find(id)
    const school = await group.school().fetch()
    return school
  }

  async update({ request, response }) {
    const { gid, gname } = request.post()
    return await group.save()
  }

  async delete({ request, response }) {
    const { group } = request.post()
    return await group.delete()
  }
}

module.exports = GroupController