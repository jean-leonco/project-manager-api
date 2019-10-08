'use strict'

const Factory = use('Factory')
const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class DatabaseSeeder {
  async run () {
    const usersArray = await Factory.model('App/Models/User').createMany(5)
    const team = await Factory.model('App/Models/Team').create()

    const createInvite = await Permission.create({
      slug: 'create_invite',
      name: 'Invite members'
    })

    const createProject = await Permission.create({
      slug: 'create_project',
      name: 'Create new Projects'
    })

    const admin = await Role.create({
      slug: 'administrator',
      name: 'Administrator'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderator'
    })

    await Role.create({
      slug: 'visitor',
      name: 'Visitor'
    })

    await admin.permissions().attach([createInvite.id, createProject.id])

    await moderator.permissions().attach([createProject.id])

    const promises = usersArray.map(async user => {
      await user.teams().attach(team.id)

      const teamJoin = await user
        .teamsJoins()
        .where('team_id', team.id)
        .first()

      if (user.id > 2) {
        await teamJoin.roles().attach([admin.id])
      } else {
        await teamJoin.roles().attach([moderator.id])
      }
    })

    await Promise.all(promises)
  }
}

module.exports = DatabaseSeeder
