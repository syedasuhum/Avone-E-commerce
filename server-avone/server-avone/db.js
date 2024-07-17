
const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://outthinc:wODCNJLZ8qW8QGXZ@cluster0.uqjscpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('mongoDb Connected')
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
module.exports = connectDB;