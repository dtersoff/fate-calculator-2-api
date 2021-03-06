const mongoose = require('mongoose')
const fs = require('fs')
const dbAddress = require('../config/db')

const bcrypt = require('bcrypt')
const bcryptSaltRounds = 10

const User = require('../app/models/user.js')
const Servant = require('../app/models/servant.js')

mongoose.Promise = global.Promise
mongoose.connect(dbAddress, {
  useMongoClient: true
})

const db = mongoose.connection

const done = () => db.close()

const parseServants = () => {
  return new Promise((resolve, reject) => {
    const servants = []
    const parse = require('csv').parse
    const parser = parse({ columns: true })

    const input = fs.createReadStream('data/servants.csv')
    input.on('error', e => reject(e))

    parser.on('readable', () => {
      let record
      while (record = parser.read()) { // eslint-disable-line
        servants.push(record)
      }
    })

    parser.on('error', e => reject(e))
    parser.on('finish', () => resolve(servants))
    input.pipe(parser)
  })
}

if (process.argv[2] && process.argv[3]) {
  bcrypt.hash(process.argv[3], bcryptSaltRounds)
    .then((pword) => {
      return User.create({email: process.argv[2], hashedPassword: pword})
    })
    .then(user => Promise.all([ user, parseServants() ]))
    .then(data => {
      let [user, servants] = data

      return Promise.all(servants.map(servant => {
        setTimeout(() => {
          return Servant.create({
            name: servant.name,
            sclass: servant.sclass,
            level: servant.level,
            rarity: servant.rarity,
            atk: servant.atk,
            hp: servant.hp,
            bond: servant.bond,
            owner: user._id
          })
        }, 10)
      }))
    })
    .then(servants => {
      console.log(`Created ${servants.length} servants!`)
    })
    .catch(console.error)
    .then(done)
} else {
  console.log('Script requires email and password')
  done()
}
