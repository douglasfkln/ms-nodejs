const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000

const Film = mongoose.model('Film', {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String
})


app.get("/film", async (request, response) => {
  const films = await Film.find()
  return response.status(200).send(films)
})

app.post("/film", async (request, response) => {
  const film = new Film({
    title: request.body.title,
    description: request.body.description,
    image_url: request.body.image_url,
    trailer_url: request.body.trailer_url
  })

  await film.save()
  return response.status(201).send(film)
})

app.delete("/film/:id", async (request, response) => {
  await Film.findByIdAndDelete(request.params.id)
  return response.status(204).send()
})

app.put("/film/:id", async (request, response) => {
  const film = await Film.findByIdAndUpdate(request.params.id, {
    title: request.body.title,
    description: request.body.description,
    image_url: request.body.image_url,
    trailer_url: request.body.trailer_url
  }, {
    new: true
  })
  return response.status(200).send(film)
})

app.listen(port, () => {
  // Indicação da documentação do mongoose colocar aqui
  mongoose.connect('mongodb+srv://douglasfkln:l4vUDOMS55cNtpLx@ms-nodejs.zqoa2pr.mongodb.net/?retryWrites=true&w=majority&appName=ms-nodejs');
  console.log('App running')
})