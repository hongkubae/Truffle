// firebaseAdmin.js

const admin = require('firebase-admin');
const serviceAccount = require('./firebaseConfig');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
