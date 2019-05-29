
const router = require('express').Router()

const { Aircraft, Country} = require('../db/models/index')


router.get('/', async (req, res, next) => {
  try{
    const allAircrafts = await Aircraft.findAll({
        include: [{model: Country}]
    })
    res.json(allAircrafts)
  }
  catch(err){
    next(err)
  }
})


router.get('/:id', async (req, res, next) => {
  try {
    const singleAircraft = await Aircraft.findAll({
      where: {
        id: req.params.id
      },
      include: [{model: Country}]
    })
    res.json(singleAircraft)
  }
  catch(err){
    next(err)
  }
})


// POST ROUTES || CREATE


router.post('/', async (req, res, next) => {
  try {
    const newAircraft = await Aircraft.create(req.body)
    res.status(201).send(newAircraft)
  }
  catch (e) {
    next(e)
  }
})




// PUT ROUTES || UPDATE
router.put('/:id', async (req, res, next) => {
  try {
      const updated = await Aircraft.update(req.body)
      res.send(updated)
  }
  catch (err) {
    next(err)
  }
})



// DELETE ROUTES || DESTROY
router.delete('/:id', async (req, res, next) => {
  try {
      const deleted = await Aircraft.destroy({
        where: {
          id: req.params.id
        }
      })
      res.send({id: req.params.id, message: 'Deleted successfully'})
  }
  catch (err) {
    next(err)
  }
})


module.exports = router
