

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
    const data = await Country.findById(req.params.countryId)
    if(data){
      const updated = await Country.update(
        {
          name: req.body.name,
          GFI: req.body.gfi,
          flagUrl: req.body.flagUrl
        },
        {
        returning: true,
          where: {
            id: req.params.countryId
          }
        }
      )
      res.send(updated)
    }
    else{
      res.status(404).end()
    }
  }
  catch (err) {
    next(err)
  }
})


// DELETE ROUTES || DESTROY


router.delete('/:countryId', async (req, res, next) => {
  try {
    const data = await Country.findById(req.params.countryId)
    if(data){
      const deleted = await Country.destroy({
        where: {
          id: req.params.countryId
        }
      })
      res.status(204).json({message: 'Deleted successfully'})
    }
    else{
      res.status(404).end()
    }
  }
  catch (err) {
    next(err)
  }
})

module.exports = router
