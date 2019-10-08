'use strict'

class Member {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      roles: 'array|required',
      'role.*': 'number|required'
    }
  }
}

module.exports = Member
