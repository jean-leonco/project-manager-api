'use strict'

const Invite = use('App/Models/Invite')

class InviteController {
  async store ({ request, auth, response }) {
    const invites = request.input('invites')

    const data = invites.map(email => ({
      email,
      user_id: auth.user.id,
      team_id: request.team.id
    }))

    await Invite.createMany(data)

    return response.send({ message: 'Invites created with success' })
  }
}

module.exports = InviteController
