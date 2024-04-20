import { Router } from 'express'
import { getFilms, getFilm, createFilm, deleteFilm, updateFilm } from '../services/films.js'
// import { FilmDTO } from '../dtos/FilmDTO'

const router = Router()

router.get("/", async (request, response) => {
    const films = await getFilms()
    return response.status(200).send(films)
})

router.get("/:id", async (request, response) => {
    const film = await getFilm(request.params.id)
    return response.status(200).send(film)
})

router.post("/", async (request, response) => {
    const params = {
        title: request.body.title,
        description: request.body.description,
        image_url: request.body.image_url,
        trailer_url: request.body.trailer_url,
    }
    const film = await createFilm(params)
    return response.status(201).send(film)
})

router.delete("/:id", async (request, response) => {
    await deleteFilm(request.params.id)
    
    return response.status(204).send()
})

router.put("/:id", async (request, response) => {

    const film = await updateFilm(request.params.id, {
        title: request.body.title,
        description: request.body.description,
        image_url: request.body.image_url,
        trailer_url: request.body.trailer_url
    })
    
    return response.status(200).send(film)
})

export default router