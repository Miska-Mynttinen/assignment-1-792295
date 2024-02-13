const dataRouter = require('express').Router()
require('dotenv').config()

const Data = require('./dataModel');

dataRouter.get('/', async (request, response) => {
  const data = await Data.find({})
  response.json(data)
})


dataRouter.get('/:id', async (request, response) => {
  const data = await Data.findById(request.params.id)
  if (data) {
    response.json(data.toJSON())
  } else {
    response.status(404).end
  }
})


dataRouter.post('/', async (request, response) => {
  const body = request.body

  const data = new Data({
    thing: body.thing
  })

  const savedData = await data.save()
  response.status(201).json(savedData)
})


dataRouter.delete('/:id', async (request, response) => {
  await Data.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = dataRouter