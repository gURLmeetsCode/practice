// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations
const db = require('../_db')
const Aircraft = require('./Aircrafts')
const Country = require('./Countries')


// ASSOCIATIONS
Aircraft.belongsTo(Country)
Country.hasMany(Aircraft)

Aircraft.hasOne(Aircraft, {as: 'succeeded'})


module.exports = {
  Aircraft,
  Country,
  db
}
