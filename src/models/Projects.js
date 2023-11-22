import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectSchema = new Schema({
    name: String,
    description: String,
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
    },
});

export default model('Project', projectSchema);
