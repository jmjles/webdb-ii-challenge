// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/data.db3'
    },
    seeds:{
      directory: __dirname + '/seeds'
    },
    migrations:{
      directory: __dirname + '/migrations'
    },
    useNullAsDefault: true
  },

};