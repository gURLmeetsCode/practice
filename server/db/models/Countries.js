const Sequelize = require('sequelize');
const db = require('../_db');

const Op = Sequelize.Op;


const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
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
    defaultValue: "image"
  }
})

Country.getTopFive = function(){
  const topFive = Country.findAll({
    where: {
      GFI: {
        [Op.lte]: 10
      }
    },
    order: [
        ['GFI', 'ASC']
    ],
    limit: 5
  })
  return topFive
}

module.exports = Country
