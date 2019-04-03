const admin = require('firebase-admin')

const serviceAccount = require('../../firebase-admin.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://i-tallenta.firebaseio.com'
})

module.exports = admin
