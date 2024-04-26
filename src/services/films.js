import Film from '../models/film.js'

export const getFilms = async () => {
    const films = await Film.find()
    return films
}

export const getFilm = async (id) => {
    const film = Film.findById(id)
    return film
}

export const createFilm = async (params) => {
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
    await Film.findByIdAndDelete(id)
}

export const updateFilm = async (id, params) => {
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
