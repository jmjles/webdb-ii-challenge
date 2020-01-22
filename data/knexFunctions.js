const connect = require('./knexfile')
const db = connect('cars')

exports.db = db