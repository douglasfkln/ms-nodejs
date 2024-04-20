import mongoose from "mongoose";

const FilmSchema = new mongoose.Schema({
    titlse: {type: String, required: true},
    description: {type: String, required: true},
    image_url: {type: String, required: true},
    trailer_url: {type: String, required: true}
})

export default mongoose.models.Film || mongoose.model('Film', FilmSchema)
