

const router = require('express').Router()

const Country = require('../db/models/Countries')
const Aircraft = require('../db/models/Aircrafts')

router.get('/', async (req, res, next) => {
  try{
    const allCountries = await Country.findAll()
    res.json(allCountries)
  }
  catch(err){
    next(err)
  }
})

router.get(/topFive/, async (req, res, next) => {
  try {
    const topFive = await Country.getTopFive()
    res.json(topFive)
  }
  catch(err) {
    next(err)
  }
})

router.get('/:countryId', async (req, res, next) => {
  try{
    const singleCountry = await Country.findById(req.params.countryId, {
      include: [{model: Aircraft}]
    })
    res.json(singleCountry)
 }
  catch(err){
    next(err)
  }
})

// POST ROUTES || CREATE
router.post('/', async (req, res, next) => {
  try {
    const newCountry = await Country.create(req.body)
    res.status(201).send(newCountry)
  }
  catch (err) {
    next(err)
  }
})




// PUT ROUTES || UPDATE

router.put('/:countryId', async (req, res, next) => {
  try {
      const updated = await Country.update(req.body)
      res.send(updated)
  }
  catch (err) {
    next(err)
  }
})


// DELETE ROUTES || DESTROY


router.delete('/:countryId', async (req, res, next) => {
  try {

      const deleted = await Country.destroy({
        where: {
          id: req.params.countryId
        }
      })
      res.send({id: req.params.countryId, message: 'Deleted successfully'})
  }
  catch (err) {
    next(err)
  }
})

module.exports = router
