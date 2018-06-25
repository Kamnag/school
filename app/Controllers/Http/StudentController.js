'use strict'
const Student = use('App/Models/Student')
const Group = use ('App/Models/Group')
const School = use ('App/models/School')
const Database = use('Database')


class StudentController {

  async index({ request, response }) {    
    const students = await Student.all()
    return students
  }

  async store({ request, response }) {   
    const { id, name, group_id, roll } = request.post()
    return group_id
    await Student.create({ id, name })
    const group = await Group.findBy('id', group_id)
    const student = await Student.find(student_id)
    return await student.groups().sync([group.id], (row) => {
      row.roll_no = roll
    })
  }

  async show({ session, request, response, params: { id } }) {
    // session.put('id', id)
    // response.redirect('/schools')    
    const students = await Student
    .query()    
    .where({ id })                 
    .with('groups.school')                                       
    .fetch()
    // return session.flashAll()

    // return students
  }

  async delete({ request, response }) {
    const student = await Student.find(request.params.sid)
    console.log(student)
    await student.delete()
    response.status(200).json({
      message: 'deleted',
      data: ''
    })
  }
}

module.exports = StudentController



    // const student = await Student.find(1)
    // const schools = await student.schools().fetch()
    // // const schools = await groups.schools().fetch()
    // return schools

    // const temp = await Database
    //   .select('school_id')
    //   .from('group_schools')
    //   .innerJoin('student_group', 'group_schools.group_id', 'student_group.group_id')
    //   .where('student_id', '1')


    // return temp


    // const students = await Student.all()
    // const students = await Student.query().on('query',console.log).fetch()
    // console.log("test")
    // response.status(200).json({
    //   message: 'Here are your students.',
    //   data: students
    // })

     // const student = await request.post().Student

    // return await student.delete()

       // const students = await Student.find(request.params.sid)
    //works    return await students.groups().fetch()

  //   const student = await Student.find(1)
  //   const group = await student
  //     .groups()
  //     .createMany([
  //   { gid: '2' },
  //   { gid: '3' }
  // ])


    // const students = await Student.find(id)
    // const studentsProfiles = await students.groups().fetch()



      // const students = await Student.query().with('groups').where('id', sid).fetch()
      // return await students.groups().fetch()


    // console.log(studentsProfiles)

    //   response.status(200).json({
    //   message: 'Here is the student.',
    //   data: studentsProfiles
    // })

    // return await student.groups().detach([ group_5.id ])



    // const student = await Student.find(1)
    // const groups = await Group.find('id', '5')
    // return await student.groups().updatePivot({roll_no: 90}, Group.id)
    // const student = await Student.find(1)

    // works 1 const roll_no = await Group.findBy('id', '5')
    // const student = await Student.find(1)

    // return await student.groups().attach([roll_no.id])

    

    // const roll = [group_4.id]
    // return roll
    // await student.groups().attach(roll, (row) => {
    //   if (row.group_id === mercedes.id) {
    //   row.is_current_owner = true
    // }


    

    //works const group = await Group.findBy('id', 1)
    // const student = await Student.find(6)
    // return await student.groups().attach([group.id])
    

    // const users = await Database.from('users').where({ id: 1 })

    // .updatePivot({roll_no: 90})
    // 

    


    // const student = await Student.find(1)
    // const { group } = await student.groups().on('query',console.log).attach([{ id: '12' },{ id: '13' }])

    // const mercedes = await Car.findBy('reg_no', '39020103')
    // const user = await User.find(1)

    // await user.cars().attach([mercedes.id])

    // const { sname, scid, created_at, updated_at } = request.post()

    // const students = await Student.create({ sname, scid })

    // response.status(201).json({
    //   message: 'Successfully created a new student.',
    //   data: student
    // })


    // const group = await Group.fetch()
    // const student = await Student.find(sid)
    // return await student.groups().sync([group.id], (row) => {
    //   row.roll_no = 12
    //   })    

    // const students = await Student.find(sid)
    // return students





