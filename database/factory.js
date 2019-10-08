'use strict'

const Factory = use('Factory')

const Hash = use('Hash')

Factory.blueprint('App/Models/User', async faker => {
  return {
    name: faker.name(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint('App/Models/Team', faker => {
  return {
    name: faker.company(),
    slug: faker.syllable(),
    user_id: 1
  }
})
