/*GET
- all countries
  - populated with aircrafts
- a country by id
  - populated with aircrafts
  - excluding the description of the aircraft
- top 5 countries
  - by GFI (0 is strongest (top), 10 is weakest (bottom))
  - sorted strongest to weakest
- all aircrafts
  - populated with the name of the country that owns each aircraft
  - excluding the descriptions
- an aircraft by id
  - populated with only the name of the country that owns the aircraft*/

const router = require('express').Router()

const Countries = require('../db/models/Countries')

router.get('/', async (req, res, next) => {
  const 
})
