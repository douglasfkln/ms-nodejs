import express from 'express'
import mongoose from 'mongoose'
import filmsController from './controllers/films.js'
import databaseConnection from './utils/database.js'

const app = express()
app.use(express.json())
const port = 3000

app.get("/", (request, response) => {
  response.status(200).send("Bem vindo à API de Filmes!")
})

app.use('/film', filmsController)

app.listen(port, async () => {
  await databaseConnection()
  console.log(`App running in http://localhost:${port}`)
})