const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/data")
// .then(()=>{
//     console.log("Database is Connected")
// })
// .catch((error)=>{
//     console.log(error)
// })

async function getConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/data")
        console.log("Database is Connected")
    } catch (error) {
        console.log(error)
    }
}
getConnect()