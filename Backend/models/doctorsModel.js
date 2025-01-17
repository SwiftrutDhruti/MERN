import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    image: { type: String, required: true, unique: true },
    speciality: { type: String, required: true, unique: true },
    degree: { type: String, required: true, unique: true },
    experience: { type: String, required: true, unique: true },
    about: { type: String, required: true, unique: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} }
}, { minimize: false })

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

export default doctorModel;