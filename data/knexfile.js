// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data.db3'
    },
    seeds:{
      directory: './seeds'
    },
    migrations:{
      directory: './migrations'
    },
    useNullAsDefault: true
  },

};
