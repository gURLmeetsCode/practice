
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
    const data = await Aircraft.findById(req.params.id)
    if(data){
      const updated = await Aircraft.update(req.body)
      res.json(updated)
    }
    else{
      res.status(404).send()
    }
  }
  catch (err) {
    next(err)
  }
})



// DELETE ROUTES || DESTROY
router.delete('/:id', async (req, res, next) => {
  try {
    const data = await Aircraft.findById(req.params.id)
    if(data){
      const deleted = await Aircraft.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(204).send({message: 'Deleted successfully', id:req.params.id})
    }
    else{
      res.status(404).send()
    }
  }
  catch (err) {
    next(err)
  }
})


module.exports = router
