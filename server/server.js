const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch(err){
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }

};

connectDB();

app.get('/',(req,res)=>{
    res.send('Welcome to QuizLift API');
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})