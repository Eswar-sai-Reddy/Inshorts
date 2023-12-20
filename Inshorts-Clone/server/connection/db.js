import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = 'mongodb+srv://Eswar:9qFkLjupvxWh1WiV@cluster0.6uperne.mongodb.net/'
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;