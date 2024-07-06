import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://aanya8312:dQ654QCWmyDzzVk0@cluster.onhslo2.mongodb.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
