import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB connected: ${conn.connection.host}`);
        console.log('Connection established 🚀');
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
