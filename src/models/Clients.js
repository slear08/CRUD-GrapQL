import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const clientSchema = new Schema({
    name: String,
    email: String,
    phone: String,
});

export default model('Client', clientSchema);
