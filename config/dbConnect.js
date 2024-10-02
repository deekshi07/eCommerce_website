import mongoose from 'Mongoose';

const dbConnect = async ()=>{
    try {
        const connected = mongoose.connect('mongodb+srv://sjdeekshith5:CcjtJd2B6YTlv3yv@website-backend.mmqy7.mongodb.net/website-backend');
        console.log(`Connected to MongoDB...${('await connected').connection.host}`);
    }catch (error){
        console.log(`erroe: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;

//CcjtJd2B6YTlv3yv