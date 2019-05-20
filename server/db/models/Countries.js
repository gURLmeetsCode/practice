const Sequelize = require('sequelize');
const db = require('../_db');

const Op = Sequelize.Op;


const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  GFI: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0,
      max: 10
    }
  },
  flagUrl: {
    type: Sequelize.STRING,
    defaultValue: true
  }
})

Country.getTopFive = function(){
  const topFive = Country.findAll({
    where: {
      GFI: {
        [Op.lte]: 10
      }
    },
    limit: 5
  })
}

module.exports = Country
