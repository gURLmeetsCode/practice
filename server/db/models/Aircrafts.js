const Sequelize = require('sequelize');
const db = require('../_db');


const Aircraft = db.define('aircraft', {
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  year: {
    type: Sequelize.INTEGER,
    validate: {
       isAfter: "1903-01-01"
    }
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue']],
    }
  },
  cost: {
    type: Sequelize.DECIMAL,
    get: function(){
      return this.getDataValue('cost') * 1000000
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "image"
  },
  description: {
    type: Sequelize.TEXT
  }
});

Aircraft.getAircraftByType = function(param){
  const aircraftTypesArr = Aircraft.findAll({
    where: {
      type: param
    }
  })
  return aircraftTypesArr
}


module.exports = Aircraft
