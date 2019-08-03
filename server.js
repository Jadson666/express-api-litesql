const express = require('express')
const app = express()
const dbModule = require('./dbService')

dbModule.createTable()

app.get('/', (req, res) => {
  dbModule.getAllData((result) => {
    res.status(200).send(result)
  })
})

app.post('/:name', (req, res) => {
  const name = req.params.name
  dbModule.insertData(name)
  res.
    status(201).
    send({ message: `${name} is successfully insert into Database` })
})

app.put('/:name/:name2', (req, res) => {
  const name = req.params.name
  const name2 = req.params.name2
  dbModule.updateDate(name, name2)
  res.status(200).send({ message: `all ${name} is been updated to ${name2}` })
})

app.delete('/name/:name', (req, res) => {
  const name = req.params.name
  dbModule.deleteByName(name)
  res.status(200).send({ message: `${name} is be deleted` })
})

app.delete('/all', (req, res) => {
  dbModule.deleteAll()
  res.status(200).send({ message: 'all record is successful deleted' })
})

app.listen(3000, () => {
  console.log('3000 port is listening')
})
