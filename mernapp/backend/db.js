const mongoose = require('mongoose');
const mongoURI = 'mongodb://foodie:w2oWm1qXMANd3h4g@ac-fwgvaot-shard-00-00.dsjpcwo.mongodb.net:27017,ac-fwgvaot-shard-00-01.dsjpcwo.mongodb.net:27017,ac-fwgvaot-shard-00-02.dsjpcwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-i9e37g-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =() =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected")
    });
}

module.exports = mongoDB;