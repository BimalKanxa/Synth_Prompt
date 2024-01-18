import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() =>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("database connected successfully");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"synth_prompt",
            useNewUrlParser : true,
            useUnifiedTopology:true
        })
        isConnected= true;
        console.log("database connected successfully");

    } catch (error) {
        console.log(error);
    }
}