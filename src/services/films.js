import mongoose from 'mongoose'
//import { FilmDTO } from '../dtos/FilmDTO'
import Film from '../models/film.js'

export const getFilms = async () => {
    console.log('chegou no service')
    const films = await Film.find()
    return films
}

export const getFilm = async (id) => {
    console.log('chegou no service getById')
    const film = Film.findById(id)
    return film
}

export const createFilm = async (params) => {
    console.log('chegou no service create')
    const film = new Film({
        title: params.title,
        description: params.description,
        image_url: params.image_url,
        trailer_url: params.trailer_url
    })

    await film.save()
    return film
}

export const deleteFilm = async (id) => {
    console.log('chegou no service delete')
    await Film.findByIdAndDelete(id)
}

export const updateFilm = async (id, params) => {
    console.log('chegou no service update')
    const film = await Film.findByIdAndUpdate(id, {
        title: params.title,
        description: params.description,
        image_url: params.image_url,
        trailer_url: params.trailer_url
    }, {
        new: true
    })
    return film
}
