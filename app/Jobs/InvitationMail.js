'use strict'

const Mail = use('Mail')

class InvitationMail {
  static get concurrency () {
    return 2
  }

  static get key () {
    return 'InvitationMail-job'
  }

  async handle ({ user, team, email }) {
    await Mail.send(
      ['emails.invitation'],
      {
        team: team.name,
        from: user.name,
        invitation_url: 'app.saasproject/invitation'
      },
      message => {
        message
          .from('saas@project.com', 'Saas Team')
          .to(email)
          .subject('New invitation to join a team')
      }
    )
  }
}

module.exports = InvitationMail
