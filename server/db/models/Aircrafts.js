const Sequelize = require('sequelize');
const db = require('../_db');


const Aircraft = db.define('aircraft', {
  make: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
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
    type: Sequelize.DECIMAL
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: true
  },
  description: {
    type: Sequelize.TEXT
  }
});

Aircraft.getAircraftByType = function(param){
  if(this.type === param){
    return this
  }
}

  Aircraft.updatedCost = function(){
    return this.cost = '$1,000,000'
  }

module.exports = Aircraft
